# FamilyGoal Test

## Backend (API)

The **API** is written in Ruby in Rails. It's at **/api** directory.

Endpoints:
 - **[GET] http://localhost:3000/attributes/{name}**
    - Returns a list with attributes with name **{name}**
    - Available names: **position, area, world**
    - Example:
        ```json
        [
            {
                "name": "position",
                "value": "ejecutivo pyme"
            }, {
                "name": "position",
                "value": "gerente sucursal"
            }
        ]
        ```
- **[GET] http://localhost:3000/users**
    - Returns a list with users and their respective family
    - Example:
        ```json
        [
            {
                "name": "Felipe Suazo",
                "position": "Software Engineer",
                "area": "Development",
                "world": "Amazon",
                "family": "Amazon SDE"
            }
        ]
        ```
- **[POST] http://localhost:3000/users**
    - Saves an user if it has family goal that matches their attributes
    - Sucess:
        ```json
            {
                "name": "Felipe Suazo",
                "position": "Software Engineer",
                "area": "Development",
                "world": "Amazon",
                "family": "Amazon SDE"
            }
        ```
    - Failure (It happens when user doesn't match a family goal):
        ```json
            {
                "message": "FamilyGoal not found"
            }
        ```

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