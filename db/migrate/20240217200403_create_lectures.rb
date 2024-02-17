class CreateLectures < ActiveRecord::Migration[7.0]
  def change
    create_table :lectures do |t|
      t.string :title
      t.text :abstract
      t.string :location
      t.integer :max
      t.references :speaker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
