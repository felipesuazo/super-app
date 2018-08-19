class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :area, :world, :family

  def family
    object.family
  end
end
