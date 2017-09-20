import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { Routes, PreloadAllModules, RouterModule } from "@angular/router";
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { PrizesComponent } from './prizes/prizes.component';
import { PrizesTableComponent } from './prizes/prizes-table/prizes-table.component';

//Check Viability
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'offer', component: OfferComponent },
    { path: 'prizes', component: PrizesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    AboutMeComponent,
    OfferComponent,
    ContactComponent,
    PrizesComponent,
    PrizesTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//declarations @ngmodule
//RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})