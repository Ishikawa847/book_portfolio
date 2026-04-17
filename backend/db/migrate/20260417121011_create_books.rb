class CreateBooks < ActiveRecord::Migration[7.2]
  def change
    create_table :books, id: :uuid do |t|
      t.string :title, null: false
      t.string :author
      t.string :image_url
      t.string :google_books_id
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
