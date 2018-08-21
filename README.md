# FamilyGoal Test

## Backend (API)

The **API** is written in Ruby in Rails. It's at **/api** directory.

Versions:
 - Ruby 2.5.1
 - Rails 5.2.1

How to setup it locally:
 
- bundle install
- rails db:create
- rails db:migrate
- rails db:seed

Run tests:
 - bundle exec rspec

Run server:
- rails s

-----
## Frontend (Single Page Application)

The **SPA** is written in Angular 6. It's at **/spa** directory.

Versions:
 - NodeJS 8.10.0
 - Npm 6.4.0
 - Angular 6.1.0
 - Typescript 2.7.2
 - @ngrx/platform 6.1.0
 - lodash 4.17.10
 - ng-zorro-antd 1.3.0

How to setup it locally:
 - npm install

Run app:
 - npm start