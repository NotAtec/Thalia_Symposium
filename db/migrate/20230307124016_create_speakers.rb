class CreateSpeakers < ActiveRecord::Migration[7.0]
  def change
    create_table :speakers do |t|
      t.string :name
      t.string :title
      t.text :body
      t.string :slug

      t.timestamps
    end
    add_index :speakers, :slug, unique: true
  end
end
