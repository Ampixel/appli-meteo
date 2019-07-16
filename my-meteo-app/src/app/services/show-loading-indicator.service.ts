import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowLoadingIndicatorService {

public showLoadingIndicator = true;

  constructor() { }
//appel de la varible boolean
  getShowLoadingIndicator(): boolean {
    return this.showLoadingIndicator;
  }

  setShowLoadingIndicator(status : boolean): ShowLoadingIndicatorService{
    this.showLoadingIndicator = status;
    return this;
  }
}
