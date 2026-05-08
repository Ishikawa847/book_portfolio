class CreateReadingLogs < ActiveRecord::Migration[7.2]
  def change
    create_table :reading_logs, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :book, null: false, foreign_key: true, type: :uuid
      t.text :memo
      t.date :read_on, null: false

      t.timestamps
    end
  end
end
