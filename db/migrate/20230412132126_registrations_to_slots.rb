class RegistrationsToSlots < ActiveRecord::Migration[7.0]
  def change
    rename_table :registrations, :slots
  end
end
