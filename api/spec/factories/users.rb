FactoryBot.define do
  factory :user, class: User do
    name { Faker::Simpsons.character }
    position { Faker::Job.title }
    area { Faker::Job.position }
    world { Faker::Company.name }
  end

  factory :family_goal, class: FamilyGoal do
    family { Faker::GameOfThrones.house }
    position { Faker::Job.title.downcase }
    area { Faker::Job.position.downcase }
    world { Faker::Company.name.downcase }
  end
end