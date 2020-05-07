import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BarElement } from '../barElement';
@Component({
  selector: 'pi-aside-bar-item',
  templateUrl: './aside-bar-item.component.html',
  styleUrls: ['./aside-bar-item.component.sass'],
  template:''
})
export class AsideBarItemComponent implements OnInit {

  //getting the input from other component
  @Input() barElement: BarElement;

  @Input() selected;

  constructor() {
  }

  ngOnInit(): void {
  }

  getLink(){
    return this.barElement.path;
  }

}
