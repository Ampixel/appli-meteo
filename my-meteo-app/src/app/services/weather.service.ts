import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public weather: any;
  public crd: any;
  public meteoVille: string;
  public pod: string;
  private meteoUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  private cleApi = '9b7f85bb1af08b932959a75449edf9c5'


  constructor(private http: HttpClient,) {

  }

  /**
   *methode envoie des données en get à l'api et retour de resultats de celle-ci.
   * */
  getInfosMeteo(city: string): any {
    return this.http.get(this.meteoUrl + '?q=' + city /*ternaire :'coord'*/ + '&units=metric' + '&APPID=' + this.cleApi)
      .toPromise()
      .then((reponse : any) => { //on donne a reponse une valeur any qui signifie que la valeur peut-être n'importe quoi (exemple list[0])
        console.log(reponse)
        this.meteoVille = city;
        this.weather = reponse;
        this.pod = reponse.list[0].sys.pod;
        console.log(this.pod);
        return reponse;
      })
      .catch(error => {
        console.error(error)

      });
  };

  /**
   * methode récuperer la geolocation et retourner le resultats de l'api
   */
  //en cas de success de geolocation
  success(pos) {
    this.crd = pos.coords;
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${this.crd.latitude}`);
    console.log(`Longitude : ${this.crd.longitude}`);

    //retour des infos de l'api avec les coordonnées recupérer ci-dessus
    return this.http.get(this.meteoUrl + '?lat=' + this.crd.latitude + '&lon=' + this.crd.longitude + '&APPID=' + this.cleApi)
      .toPromise()
      .then((reponse:any) => {
        console.log(reponse)
        this.pod = reponse.list[0].sys.pod;
        this.meteoVille = reponse.city.name;
        this.weather = reponse;
  
        return reponse;
      })
      .catch(error => {
        console.error(error)

      });
  }

  //en cas d'erreur ou de refus de geolocation de l'utilisateur
  error() {
    console.log('Erreur, nous ne pouvons accéder à votre geolocation')
  }

  getGeolocation() {
    //utilisation de la fonction du géolocation du navigateur avec les methode success et error en argument
    window.navigator.geolocation.getCurrentPosition((pos) => this.success(pos), () => this.error());

  }

  getMeteoVille(){
    return this.meteoVille;
  }

  //retourne la valeur de pod periode of day soit n ou d 
  getPod(){
    return this.pod;
  }
}