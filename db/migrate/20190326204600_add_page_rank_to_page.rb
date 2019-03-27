class AddPageRankToPage < ActiveRecord::Migration[5.2]
  def change
    add_column :pages, :page_rank, :decimal 
  end
end
