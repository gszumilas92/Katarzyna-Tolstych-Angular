import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'About', component: AboutMeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}