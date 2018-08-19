import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UserListComponent} from './views/user-list/user-list.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListComponent }
    ]
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
