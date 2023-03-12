class Talk < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  belongs_to :speaker
end
