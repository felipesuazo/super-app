import {FamilyGoalModel} from './family-goal.model';

export interface UserModel {
  id: number;
  name: string;
  position: string;
  area: string;
  world: string;
  'family_goal'?: FamilyGoalModel;
}
