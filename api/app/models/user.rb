class User < ApplicationRecord
  belongs_to :family_goal

  before_save :set_family_goal

  def set_family_goal
    self.family_goal = FamilyGoal.where(position: position, area: area, world: world)
  end

  # validations
  validates_presence_of :name, :position, :area, :world
end
