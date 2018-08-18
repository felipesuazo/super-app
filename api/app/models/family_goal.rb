class FamilyGoal < ApplicationRecord
  has_many :users

  # validations
  validates_presence_of :family, :position, :area, :world
end
