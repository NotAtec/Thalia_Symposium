class LecturesSlotsToMax < ActiveRecord::Migration[7.0]
  def change
    rename_column :lectures, :slots, :max
  end
end
