import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ShowLoadingIndicatorService } from './services/show-loading-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private loaderService: ShowLoadingIndicatorService) {
    //afficher un loader
    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.loaderService.setShowLoadingIndicator(true);
      }
      //setTimeout d'une 0.5 sec pour verifier la présence du loader au chargement de la page
      if (routerEvent instanceof NavigationEnd) {
        setTimeout(() => {
          this.loaderService.setShowLoadingIndicator(false);
        }, 500);

      }
    });
  }
  //retourne la valeur de getShowLoadingIndicator() de show-loading-indicator.services.ts
  getShowLoadingIndicator() {
    return this.loaderService.getShowLoadingIndicator();
  }
}

