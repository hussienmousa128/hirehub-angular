import { Routes} from "@angular/router";


export const authRoutes : Routes=[
{path:'login',loadComponent:()=>import('./login/login').then(c=>c.Login),},
]
