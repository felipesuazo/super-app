FactoryBot.define do
  factory :attribute_position, class: Attribute do
    name { "position" }
    value { Faker::Lorem.word.downcase }
  end

  factory :attribute_area, class: Attribute do
    name { "area" }
    value { Faker::Lorem.word.downcase }
  end

  factory :attribute_world, class: Attribute do
    name { "world" }
    value { Faker::StarWars.planet.downcase }
  end
end