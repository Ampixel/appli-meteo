import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ShowLoadingIndicatorService } from '../services/show-loading-indicator.service';

@Component({
  selector: 'app-app-ville-select',
  templateUrl: './app-ville-select.component.html',
  styleUrls: ['./app-ville-select.component.scss']
})
export class AppVilleSelectComponent implements OnInit {

  @Input() geoCity: string;
  public inputValue: string;
  

  constructor(private weatherService: WeatherService, private loaderService : ShowLoadingIndicatorService) { }

  /**
   * methode recup la localisation 
   */
  onGeolocation() {
    this.weatherService.getGeolocation()
  }

  ngOnInit() {
  }
  /**
   * recupère les infos de meteoVille
   */
  getRecupeInfos() {
    this.weatherService.getInfosMeteo(this.inputValue)
  }

  getMeteoVille(){
    return this.weatherService.getMeteoVille() 
  }
}