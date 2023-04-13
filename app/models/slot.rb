class Slot < ApplicationRecord
  belongs_to :user
  belongs_to :lecture

  def overmax?(lecture)
    lecture.current_count >= lecture.max
  end

  def double_booking?(lectureold, user)
    Slot.where(user_id: user.id, lecture_id: lectureold.id).exists?
  end
end
