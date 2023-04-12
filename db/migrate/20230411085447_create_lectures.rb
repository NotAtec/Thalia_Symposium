class CreateLectures < ActiveRecord::Migration[7.0]
  def change
    create_table :lectures do |t|
      t.string :title
      t.text :abstract
      t.references :speaker, null: false, foreign_key: true
      t.integer :slots
      t.string :location

      t.timestamps
    end
  end
end
