class Lecture < ApplicationRecord
  belongs_to :speaker
  has_many :registrations
  has_many :users, through: :registrations

  def registered_by(user)
    Registration.find_by(user_id: user, lecture_id: self.id) ? true : false
  end

  def userRegistration(user)
    Registration.find_by(user_id: user, lecture_id: self.id)
  end
end
