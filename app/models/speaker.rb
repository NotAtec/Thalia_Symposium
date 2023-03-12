class Speaker < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  has_one :talk
end
