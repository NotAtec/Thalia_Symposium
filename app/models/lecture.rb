class Lecture < ApplicationRecord
  belongs_to :speaker
  has_many :slots
  has_many :users, through: :slots

  def registered_by(user)
    Slot.find_by(user_id: user, lecture_id: id) ? true : false
  end

  def userRegistration(user)
    Slot.find_by(user_id: user, lecture_id: id)
  end

  def current_count
    Slot.where(lecture_id: id).count
  end
end
