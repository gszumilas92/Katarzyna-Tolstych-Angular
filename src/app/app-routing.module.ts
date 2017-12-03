import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { OfferComponent } from './offer/offer.component';
import { PrizesComponent } from './prizes/prizes.component';
import { PrizesTableComponent } from './prizes/prizes-table/prizes-table.component';
import { ContactComponent } from './contact-form/contact.component';
import { ContactPlainComponent } from './contact-plain/contact-plain.component';
import { NavArrowComponent } from './nav-arrow/nav-arrow.component';
import { BootingService } from './home/booting.service';
// AgmCoreModule must be imported here!
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './contact-plain/google-map';
// import { GoogleMapComponent } from './contact-plain/google-map';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'offer', component: OfferComponent },
    { path: 'prizes', component: PrizesComponent },
    { path: 'contact', component: ContactPlainComponent },
    { path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    declarations: [
        HomeComponent,
        AboutMeComponent,
        OfferComponent,
        ContactComponent,
        PrizesComponent,
        PrizesTableComponent,
        NavArrowComponent,
        ContactPlainComponent,
        GoogleMapComponent
    ],
    providers: [BootingService],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCXROKKnPzvjFDOOoB83aylNFukWIjlI2Q'
          }),
        FormsModule,
        CommonModule,
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}