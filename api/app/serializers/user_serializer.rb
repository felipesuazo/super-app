class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :area, :world
  belongs_to :family_goal
end
