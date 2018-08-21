require 'rails_helper'

RSpec.describe 'Users API' do
  before(:all) do
    @family_goal = create(:family_goal)
    @users = 15.times.map { create(:user, :position => @family_goal.position, :area => @family_goal.area, :world => @family_goal.world) }
  end

  describe 'GET /users' do
    before { get '/users' }

    it 'returns the list of users with their family goal' do
      expect(json).not_to be_empty
      expect(json.size).to eq(15)
    end

    it 'returns status 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /user' do
    let(:valid_params) do
      {
          name: 'Felipe Suazo',
          position: @family_goal.position,
          area: @family_goal.area,
          world: @family_goal.world
      }
    end

    let(:invalid_params) do
      {
        name: 'Sophie Turner',
        position: 'Actress',
        area: 'Series',
        world: 'Games of Thrones'
      }
    end

    context 'user have a family goal match and is saved' do
      before { post '/users', params: valid_params }

      it 'must increment the numbers of users in the db' do
        expect(json).not_to be_empty
        expect(User.all.size).to eq(16)
      end

      it 'must be matched with a family goal' do
        expect(json['family']).to eq(@family_goal.family)
      end

      it 'returns status 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'user have not a family goal match and the creation is blocked' do
      before { post '/users', params: invalid_params }

      it 'it must not increment the numbers of users in the db' do
        expect(User.all.size).to eq(15)
      end

      it 'returns status 406' do
        expect(response).to have_http_status(406)
      end
    end
  end
end