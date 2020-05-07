import { Component, OnInit, HostListener, OnChanges, SimpleChanges, Input } from '@angular/core';
import { BarElement } from './barElement';
import { IBarElement } from './iBarElement';
import { DesignService } from '../design.service';

@Component({
  selector: 'pi-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.sass']
})

export class AsideBarComponent implements OnInit {

  selected;
  rotated: boolean;

  constructor(private $rotator: DesignService) {
  }

  barElements = [
    new BarElement(
      'system',
      ' memory ',
      '/system'
    ),
    new BarElement(
      'projects',
      'assignment ',
      '/projects'
    ),
    new BarElement(
      'debug',
      ' bug_report ',
      '/debug'
    )
   ];

  ngOnInit(): void {
    //stay updated
    this.$rotator.currentRotation.subscribe(
      rotation => this.rotated = rotation
    );
  }

  selectElement( elem: BarElement ){
    this.selected = elem;
  }

}
/*{
      name: 'system',
      tag: '<span class=\"material-icons\"> memory </span>',
      path: 'full'
    }*/
