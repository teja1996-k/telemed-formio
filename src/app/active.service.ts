import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {
  public route:string;
  public emitRoute = new EventEmitter<any>();

  constructor() { 
}

updateNavig(routeString){
  this.route=routeString
  this.emitRoute.emit()
}

}
