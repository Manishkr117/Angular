import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

//Component list for path configuration

import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DetailsComponent } from './catalog/details/details.component';

//valid route paths or routes
const routePaths=[
{path:'home',component:HomeComponent},
{path:'catalog',component:CatalogComponent},
{path:'details/:id',component:DetailsComponent},
{path:'login',component:UserLoginComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',redirectTo:'/login'}
];

//create route module instance,initialized based on route paths passed as argument.
//And the instance should be loaded along with root module of application
export const AppRouterModule:ModuleWithProviders=
RouterModule.forRoot(routePaths);