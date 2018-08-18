class AttributesController < ApplicationController
  def index
    @attributes = Attribute.where(name: params[:name])
    json_response(@attributes)
  end
end
