class CreatePage < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :url, null: false
    end
    add_index :pages, :url, unique: true
  end
end
