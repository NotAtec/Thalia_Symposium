class AddLinkToSponsors < ActiveRecord::Migration[7.0]
  def change
    add_column :sponsors, :link, :string
  end
end
