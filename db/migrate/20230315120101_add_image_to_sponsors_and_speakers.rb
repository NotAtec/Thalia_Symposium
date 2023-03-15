class AddImageToSponsorsAndSpeakers < ActiveRecord::Migration[7.0]
  def change
    add_column :sponsors, :image, :string
    add_column :speakers, :image, :string
  end
end
