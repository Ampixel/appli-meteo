import { Component, OnInit, Input, Injectable } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Injectable()

@Component({
  selector: 'app-meteo-view',
  templateUrl: './meteo-view.component.html',
  styleUrls: ['./meteo-view.component.scss']
})
export class MeteoViewComponent implements OnInit {

  informations_meteo: any[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather() { //retourne les valeurs de weahterServices de la methode getInfosMeteo, Si il y a des données et les transforment en tableau
    return this.weatherService.weather ? this.weatherService.weather.list.slice(0, 4) : [];
  }
}
