import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { OfferComponent } from './offer/offer.component';
import { PrizesComponent } from './prizes/prizes.component';
import { PrizesTableComponent } from './prizes/prizes-table/prizes-table.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

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
        HomeComponent,
        AboutMeComponent,
        OfferComponent,
        ContactComponent,
        PrizesComponent,
        PrizesTableComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}