require 'rails_helper'

RSpec.describe User, type: :model do
  it { should belong_to(:family_goal) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:position) }
  it { should validate_presence_of(:area) }
  it { should validate_presence_of(:world) }
end
