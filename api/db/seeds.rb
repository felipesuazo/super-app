# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Attribute.create(name: 'position', value: 'ejecutivo personas')
Attribute.create(name: 'position', value: 'agente i')
Attribute.create(name: 'position', value: 'agente ii')
Attribute.create(name: 'position', value: 'ejecutivo select')
Attribute.create(name: 'position', value: 'gestor comercial senior')
Attribute.create(name: 'position', value: 'ejecutivo pyme')
Attribute.create(name: 'area', value: 'zona sur')
Attribute.create(name: 'area', value: 'zona norte')
Attribute.create(name: 'area', value: 'zona centro')
Attribute.create(name: 'world', value: 'santander')
Attribute.create(name: 'world', value: 'banco y filiales')
Attribute.create(name: 'world', value: 'banefe')

FamilyGoal.create(family: 'ejecutivo personas', position: 'ejecutivo personas', area: 'zona sur', world: 'santander')
FamilyGoal.create(family: 'agente', position: 'agente i', area: 'zona norte', world: 'banco y filiales')
FamilyGoal.create(family: 'jefe operaciones', position: 'agente ii', area: 'zona centro', world: 'banefe')
FamilyGoal.create(family: 'ejecutivo select', position: 'ejecutivo select', area: 'zona sur', world: 'banco y filiales')
FamilyGoal.create(family: 'gestor comercial senior', position: 'gestor comercial senior', area: 'zona norte', world: 'banco y filiales')
FamilyGoal.create(family: 'ejecutivo pyme', position: 'ejecutivo pyme', area: 'zona centro', world: 'banco y filiales')