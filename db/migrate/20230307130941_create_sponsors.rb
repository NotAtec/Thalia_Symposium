class CreateSponsors < ActiveRecord::Migration[7.0]
  def change
    create_table :sponsors do |t|
      t.string :title
      t.text :body
      t.string :slug

      t.timestamps
    end
    add_index :sponsors, :slug, unique: true
  end
end
