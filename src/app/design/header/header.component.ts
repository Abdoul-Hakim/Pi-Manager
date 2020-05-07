import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DesignService } from '../design.service';


@Component({
  selector: 'pi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  rotate = false;

  constructor( private $rotator: DesignService) {  }

  ngOnInit(): void {
  }

  rotateImg(){
    if (this.rotate === true) {
      this.rotate = false;
      this.$rotator.setRotated(this.rotate);
    }
    else {
      this.rotate = true;
      this.$rotator.setRotated(this.rotate);
    }
  }

}
