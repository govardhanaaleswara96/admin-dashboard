import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { GatewayComponent } from './gateway/gateway.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';
import { NewNetworkComponent } from './new-network/new-network.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    GatewayComponent,
    NetworkComponent,
    ProfileComponent,
    NewNetworkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
