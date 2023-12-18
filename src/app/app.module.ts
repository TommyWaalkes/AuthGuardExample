import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'game', component: GameComponent, canActivate:[AuthenticationGuard] },
  {path:'', pathMatch:'full', redirectTo:'login'}
];
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
