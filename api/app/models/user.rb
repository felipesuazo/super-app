class User < ApplicationRecord
  belongs_to :family_goal

  before_validation :set_family_goal

  def set_family_goal
    self.family_goal = FamilyGoal.where(position: position.downcase, area: area.downcase, world: world.downcase).first
  end

  # validations
  validates_presence_of :name, :position, :area, :world, :family_goal
end
