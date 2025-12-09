import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing/landing';


export const routes: Routes = [
  {path:'',component:Landing},
  {path:'jobs',
    loadChildren:()=>import('./features/jobs/jobs.routes').then(w=>w.jobRoutes),
  },
  {path:'auth',
    loadChildren:()=>import('./features/auth/auth.routes').then(w=>w.authRoutes),
  },
  {path:'**',redirectTo:'',pathMatch:'full'}
];
