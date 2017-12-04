import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-google-map',
  template: `
  <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
    <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
  </agm-map>`,
  styles: [`agm-map {height: 100%}`]
})

export class GoogleMapComponent {
  lat: number = 51.83044;
  lng: number = 6.23916;
  zoom: number = 15;
}

