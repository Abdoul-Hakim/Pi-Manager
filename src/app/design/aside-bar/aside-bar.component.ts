import { Component, OnInit, HostListener, OnChanges, SimpleChanges, Input } from '@angular/core';
import { BarElement } from './barElement';
import { IBarElement } from './iBarElement';
import { DesignService } from '../design.service';

@Component({
  selector: 'pi-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.sass']
})

export class AsideBarComponent implements OnInit, OnChanges {

  selected;
  rotated: boolean;

  constructor(private $rotator: DesignService) {
  }

  barElements = [
    new BarElement(
      'system',
      ' memory ',
      'full'
    ),
    new BarElement(
      'projects',
      'assignment ',
      'full'
    ),
    new BarElement(
      'debug',
      ' bug_report ',
      'full'
    )
   ];

  ngOnInit(): void {
    this.$rotator.currentRotation.subscribe(
      rotation => this.rotated = rotation
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  selectElement( elem: BarElement ){
    this.selected = elem;
    console.log(this.rotated);
  }

}
/*{
      name: 'system',
      tag: '<span class=\"material-icons\"> memory </span>',
      path: 'full'
    }*/
