require 'rails_helper'

RSpec.describe 'Attributes API' do
  before(:all) do
    create_list(:attribute_position, 10)
    create_list(:attribute_world, 11)
    create_list(:attribute_area, 12)
  end

  describe 'GET /attributes/position' do
    before { get '/attributes/position' }

    it 'returns attributes with name position' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /attributes/world' do
    before { get '/attributes/world' }

    it 'returns attributes with name world' do
      expect(json).not_to be_empty
      expect(json.size).to eq(11)
    end

    it 'returns status 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /attributes/area' do
    before { get '/attributes/area' }

    it 'returns attributes with name area' do
      expect(json).not_to be_empty
      expect(json.size).to eq(12)
    end

    it 'returns status 200' do
      expect(response).to have_http_status(200)
    end
  end
end