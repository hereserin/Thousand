class Page < ApplicationRecord
  has_many :paragraphs

  has_many :pages_inbound_links,
    class_name: 'PagesOutboundLink',
    foreign_key: :outbound_link_id,
    primary_key: :id

  has_many :inbound_links,
    through: :pages_inbound_links,
    source: :outbound_link


  has_many :pages_outbound_links,
    class_name: 'PagesOutboundLink',
    foreign_key: :page_id,
    primary_key: :id

  has_many :outbound_links,
    through: :pages_outbound_links,
    source: :page

  def total_outbound_links
    @total_outbound_links ||= self.outbound_links.count
    @total_outbound_links
  end

  def create_own_row(all_pages)
    adj_mtx_row = []
    all_pages_count = all_pages.count

    all_pages.each do |page|
      adj_func = 0

      links_to_that_page = self.outbound_links.select {|link| link.id == page.id }
      if links_to_that_page.count > 0
        adj_func = links_to_that_page.count / all_pages_count
      end
      
      adj_mtx_row << adj_func
    end

    return adj_mtx_row
  end




end
