class User < ApplicationRecord
  belongs_to :family_goal, optional: true

  before_save :set_family_goal

  def set_family_goal
    self.family_goal = FamilyGoal.find_by(position: position.downcase, area: area.downcase, world: world.downcase)
  end

  def family
    self.family_goal.family
  end

  # validations
  validates_presence_of :name, :position, :area, :world
end
