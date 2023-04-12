class Slot < ApplicationRecord
  belongs_to :user
  belongs_to :lecture

  def overmax?(lecture)
    lecture.current_count >= lecture.max
  end
end
