import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-app-jours-meteo',
  templateUrl: './app-jours-meteo.component.html',
  styleUrls: ['./app-jours-meteo.component.scss']
})

export class AppJoursMeteoComponent implements OnInit {

  @Input() meteo_heures: string;
  @Input() temperature_max: string;
  @Input() temperature_min: string;
  @Input() wind: string;
  @Input() cloud: string;
  @Input() icones: Array<any>;


  private icons = {
    '01': "assets/images/jour_1.png",
    '02': "assets/images/jour_5.png",
    '03': "assets/images/jour_5.png",//icone nuage
    '04': "assets/images/jour_5.png",//icone nuage+nuage gris
    '09': "assets/images/jour_2.png",//nuage+nuage gris+pluie
    10: "assets/images/jour_2.png",//nuage+soleil+pluie
    11: "assets/images/jour_4.png",//Nuage+nuage gris+ éclaires
    13: "assets/images/jour_2.png",//nuage +neige
    50: "assets/images/jour_3.png",//ondes du mistrale
  };

  private newsClass = {
    '01': 'sunColor',
    '02': 'sunColor',
    '03': 'sunColor',
    '04': 'sunColor',
    '09': 'badColor',
    10:'badColor',
    11:'badColor',
    13:'badColor',
    50:'badColor',
  };

  private newsClassColor = {
    'n': 'nightColor',
  }

  constructor(private http: HttpClient, private weatherService: WeatherService,) { }

  ngOnInit() { }
/**
 * associer les icones de l'api aux notres, dans un tableau. 
 * Selon le temps et l'heure, changer le fond des elements.
 */
  getElements(type:string = 'icons') {
    let result = '';
    let icon = this.icones[0].icon;
    if (icon && icon.length >= 2) {
      let icon_name = icon.substring(0, 2);
      let tabElements = type === 'icons'? this.icons : this.newsClass; //ternaire
      if (tabElements.hasOwnProperty(icon_name)) {
        result = tabElements[icon.substring(0, 2)];
      }
    }
    
    return result;
  }

  //faire une condition qui dit si getPod=n alors change le dégrader en version nuit
  getPod(){
    return this.weatherService.getPod();
  }
  
}