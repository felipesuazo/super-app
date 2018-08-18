require 'rails_helper'

RSpec.describe FamilyGoal, type: :model do
  it { should have_many(:users) }
  it { should validate_presence_of(:family) }
  it { should validate_presence_of(:position) }
  it { should validate_presence_of(:area) }
  it { should validate_presence_of(:world) }
end
