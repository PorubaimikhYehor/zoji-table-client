import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ConsumersComponent } from './modules/consumers/consumers.component';
import { DepartmentsComponent } from './modules/departments/departments.component';
import { RegionsComponent } from './modules/regions/regions.component';
import { UsersComponent } from './modules/users/users.component';

export interface RouteConfig extends Route {
  title?: string;
  icon?: string;
  noMenu?: boolean;
}

export const routesConfig: RouteConfig[] = [
  { path: 'consumers', component: ConsumersComponent, title: 'Consumers', icon: 'file-document-edit-outline' },
  { path: 'users', component: UsersComponent, title: 'Users', icon: 'file-document-edit-outline' },
  { path: 'departments', component: DepartmentsComponent, title: 'Departments', icon: 'file-document-edit-outline' },
  { path: 'regions', component: RegionsComponent, title: 'Regions', icon: 'file-document-edit-outline' },
  // { path: 'languages', component: LanguagesComponent, title: 'Languages', icon: 'web' },
  // { path: 'templates', component: TemplatesComponent, title: 'Templates', icon: 'file-document-outline' },
  // { path: 'content', component: ContentComponent, title: 'Content', icon: 'text-box-multiple-outline' },
  // { path: 'company-entities', component: CompanyEntitiesComponent, title: 'Company entities', icon: 'domain', noMenu: true },
  // { path: 'company-owners', component: CompanyOwnersComponent, title: 'Company owners', icon: 'account-group-outline', noMenu: true },
  // { path: 'test-field', component: TestFieldComponent, title: 'Test field', icon: 'test', noMenu: true },
  // { path: 'countries', component: CountryComponent, title: 'Countries', icon: 'web', noMenu: false },
  // { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'regions', noMenu: true }
];

const routes: Routes = routesConfig.map(r => {
  const route: Route = {};
  route.path = r.path;
  if (r.component) route.component = r.component;
  if (r.redirectTo) route.redirectTo = r.redirectTo;
  return route
})


// const routes: Routes = [
//   { path: 'consumers', component: ConsumersComponent },
//   { path: 'users', component: UsersComponent },
//   { path: 'departments', component: UsersComponent },
//   { path: '**', redirectTo: 'users' }

// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
