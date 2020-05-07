import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  private isRotated = false;

  private rotation = new BehaviorSubject(this.isRotated);
  currentRotation = this.rotation.asObservable();

  constructor() {  }

  getRotated() {
  }

  setRotated(rotated: boolean){
    this.isRotated = rotated;
    this.changeRotation(this.isRotated);
  }

  changeRotation( rotation: boolean ){
    this.rotation.next(rotation);
  }

}
