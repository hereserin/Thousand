class Page < ApplicationRecord
  has_many :paragraphs

  has_many :pages_inbound_links,
    class_name: 'PageOutboundLink',
    foreign_key: :outbound_link_id,
    primary_key: :id

  has_many :inbound_links,
    through: :pages_inbound_links


  has_many :pages_outbound_links,
    class_name: 'PageOutboundLink',
    foreign_key: :page_id,
    primary_key: :id

  has_many :outbound_links,
    through: :pages_outbound_links

end
