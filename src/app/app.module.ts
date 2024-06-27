import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionApiComponent } from './gestion-api/gestion-api.component';
import { AjoutApiComponent } from './ajout-api/ajout-api.component';
import { GestionApplicationComponent } from './gestion-application/gestion-application.component';
import { GestionSouscriptionComponent } from './gestion-souscription/gestion-souscription.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ParametresComponent } from './parametres/parametres.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { GestionSystemeComponent } from './gestion-systeme/gestion-systeme.component';
import { TypeAutorisationComponent } from './type-autorisation/type-autorisation.component';
import { AjoutApplicationComponent } from './ajout-application/ajout-application.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { AjoutSystemeComponent } from './ajout-systeme/ajout-systeme.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AuthGuard } from './helpers/auth.guard';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AjoutTypeautComponent } from './ajout-typeaut/ajout-typeaut.component';
import { ModifApiComponent } from './modif-api/modif-api.component';
import { ModifAppComponent } from './modif-app/modif-app.component';
import { ModifSystemeComponent } from './modif-systeme/modif-systeme.component';
import { ModifUtilisateurComponent } from './modif-utilisateur/modif-utilisateur.component';
import { ModifTypeComponent } from './modif-type/modif-type.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    DashboardComponent,
    GestionApiComponent,
    AjoutApiComponent,
    GestionApplicationComponent,
    GestionSouscriptionComponent,
    NotificationsComponent,
    ParametresComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    GestionUtilisateurComponent,
    ParametrageComponent,
    GestionSystemeComponent,
    TypeAutorisationComponent,
    AjoutApplicationComponent,
    AjoutSystemeComponent,
    SidebarComponent,
    AjoutTypeautComponent,
    ModifApiComponent,
    ModifAppComponent,
    ModifSystemeComponent,
    ModifUtilisateurComponent,
    ModifTypeComponent,
    AjoutUtilisateurComponent,
    DeleteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    authInterceptorProviders,
    AuthGuard,
    //{ provide:HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
