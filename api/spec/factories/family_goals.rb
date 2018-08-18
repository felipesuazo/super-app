FactoryBot.define do
  factory :family_goal do
    name { Faker::GameOfThrones.unique.family }
    position { FactoryBot.build(:attribute, name: "position", value: Faker::Lorem.word) }
    area { FactoryBot.build(:attribute, name: "area", value: Faker::Lorem.word) }
    world { FactoryBot.build(:attribute, name: "world", value: Faker::Lorem.word) }
  end
end