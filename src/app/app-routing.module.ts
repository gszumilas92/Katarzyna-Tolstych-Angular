import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { OfferComponent } from './offer/offer.component';
import { PrizesComponent } from './prizes/prizes.component';
import { PrizesTableComponent } from './prizes/prizes-table/prizes-table.component';
import { ContactComponent } from './contact/contact.component';
import { NavArrowComponent } from './nav-arrow/nav-arrow.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'offer', component: OfferComponent },
    { path: 'prizes', component: PrizesComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
        AboutMeComponent,
        OfferComponent,
        ContactComponent,
        PrizesComponent,
        PrizesTableComponent,
        NavArrowComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}