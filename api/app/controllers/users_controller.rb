class UsersController < ApplicationController
  before_action :family_exists, only: :create
  before_action :get_users, only: :index

  def index
    json_response(@users)
  end

  def create
    if @family
      @user = User.create!(user_params)
      json_response(@user, :created)
    else
      json_response({ message: 'FamilyGoal not found' }, :not_acceptable)
    end
  end

  def user_params
    params.permit(:name, :position, :area, :world)
  end

  def family_exists
    @family = FamilyGoal.exists?(position: params[:position].downcase, area: params[:area].downcase, world: params[:world].downcase)
  end

  def get_users
    @users = User.includes(:family_goal)
  end
end