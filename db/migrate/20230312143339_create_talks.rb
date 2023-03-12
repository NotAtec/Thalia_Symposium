class CreateTalks < ActiveRecord::Migration[7.0]
  def change
    create_table :talks do |t|
      t.string :title
      t.text :body
      t.integer :slots
      t.integer :hall
      t.string :slug
      t.belongs_to :speaker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
