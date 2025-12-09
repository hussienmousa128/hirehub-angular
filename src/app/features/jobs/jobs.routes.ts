import { Routes } from "@angular/router";


export const jobRoutes : Routes =[
  {path:'',loadComponent:()=> import('./jobs/jobs').then(m=>m.Jobs),},
]
