import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionApiComponent } from './gestion-api/gestion-api.component';
import { AjoutApiComponent } from './ajout-api/ajout-api.component';
import { GestionApplicationComponent } from './gestion-application/gestion-application.component';
import { GestionSouscriptionComponent } from './gestion-souscription/gestion-souscription.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ParametresComponent } from './parametres/parametres.component';
import { LoginComponent } from './login/login.component';
import { GestionSystemeComponent } from './gestion-systeme/gestion-systeme.component';
import { RegisterComponent } from './register/register.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { AjoutSystemeComponent } from './ajout-systeme/ajout-systeme.component';
import { AjoutApplicationComponent } from './ajout-application/ajout-application.component';
import { TypeAutorisationComponent } from './type-autorisation/type-autorisation.component';
import { AuthGuard } from './helpers/auth.guard';
import { AjoutTypeautComponent } from './ajout-typeaut/ajout-typeaut.component';
import { ModifApiComponent } from './modif-api/modif-api.component';
import { ModifAppComponent } from './modif-app/modif-app.component';
import { ModifSystemeComponent } from './modif-systeme/modif-systeme.component';
import { ModifTypeComponent } from './modif-type/modif-type.component';
import { ModifUtilisateurComponent } from './modif-utilisateur/modif-utilisateur.component';

const routes: Routes = [
  {path:'acceuil',component:AcceuilComponent},
  {path:'',redirectTo:'/acceuil',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'gestion-api',component:GestionApiComponent,canActivate: [AuthGuard]},
  {path:'gestion-systeme',component:GestionSystemeComponent,canActivate: [AuthGuard]},
  {path:'parametrage',component:ParametrageComponent,canActivate: [AuthGuard]},
  {path:'gestion-utilisateurs',component:GestionUtilisateurComponent,canActivate: [AuthGuard]},
  {path:'ajout-utilisateur',component:AjoutUtilisateurComponent,canActivate: [AuthGuard]},
  {path:'ajout-systeme',component:AjoutSystemeComponent,canActivate: [AuthGuard]},
  {path:'ajout-application',component:AjoutApplicationComponent,canActivate: [AuthGuard]},
  {path:'ajout-typeaut',component:AjoutTypeautComponent,canActivate: [AuthGuard]},
  {path:'type-autorisation',component:TypeAutorisationComponent,canActivate: [AuthGuard]},
  {path:'ajout-api',component:AjoutApiComponent,canActivate: [AuthGuard]},
  {path:'gestion-application',component:GestionApplicationComponent,canActivate: [AuthGuard]},
  {path:'gestion-souscription',component:GestionSouscriptionComponent,canActivate: [AuthGuard]},
  {path:'notifications',component:NotificationsComponent,canActivate: [AuthGuard]},
  {path:'parametres',component:ParametresComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'modif-api/:code', component:ModifApiComponent, canActivate: [AuthGuard]},
  {path:'modif-app/:code', component:ModifAppComponent, canActivate: [AuthGuard]},
  {path:'modif-systeme/:code', component:ModifSystemeComponent, canActivate: [AuthGuard]},
  {path:'modif-type/:code', component:ModifTypeComponent, canActivate: [AuthGuard]},
  {path:'modif-utilisateur/:code', component:ModifUtilisateurComponent, canActivate: [AuthGuard]},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
