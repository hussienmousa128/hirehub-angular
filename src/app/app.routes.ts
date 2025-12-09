import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing/landing';
import { Jobs } from './features/jobs/jobs/jobs';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
  {path:'',component:Landing},
  {path:'jobs',component:Jobs},
  {path:'auth/login', component:Login},

  {path:'**',redirectTo:'',pathMatch:'full'}
];
