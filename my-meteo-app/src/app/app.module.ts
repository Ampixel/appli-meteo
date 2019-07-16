import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppHeaderMeteoComponent } from './my-app-header-meteo/my-app-header-meteo.component';
import { AppJoursMeteoComponent } from './app-jours-meteo/app-jours-meteo.component';
import { AppVilleSelectComponent } from './app-ville-select/app-ville-select.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MeteoViewComponent } from './meteo-view/meteo-view.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { WeatherService } from './services/weather.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { ShowLoadingIndicatorService } from './services/show-loading-indicator.service';
registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  { path: 'meteo_view', component: MeteoViewComponent },
  { path: '', component: MeteoViewComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: '/not-found' },//il faut mettre cette ligne à la fin
]

@NgModule({
  declarations: [
    AppComponent,
    MyAppHeaderMeteoComponent,
    AppJoursMeteoComponent,
    AppVilleSelectComponent,
    MeteoViewComponent,
    FourOhFourComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    WeatherService,
    { provide: LOCALE_ID, useValue: "fr-FR" },
    ShowLoadingIndicatorService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
