import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomePage } from '@/modules/app-routing/pages/home/home.page';
import { LoginPage } from '@/pages/login/login.page';
import { RegisterPage } from '@/pages/register/register.page';
import { ROUTES } from '@/types/routes';

const routes: Route[] = [
  {
    path: ROUTES.HOME,
    component: HomePage,
  },
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
  },
  {
    path: ROUTES.REGISTER,
    component: RegisterPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
