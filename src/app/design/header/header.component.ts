import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'pi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  rotate = false;

  ngOnInit(): void {
  }

  rotateImg(){
    if (this.rotate === true) {
      this.rotate = false;
    }
    else {
      this.rotate = true;
    }
  }

}
