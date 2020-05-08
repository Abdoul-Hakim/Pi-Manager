import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/design/design.service';
import { IGPIO } from './igpio';

@Component({
  selector: 'pi-gpio-specs',
  templateUrl: './gpio-specs.component.html',
  styleUrls: ['./gpio-specs.component.sass']
})
export class GpioSpecsComponent implements OnInit {

  rotated: boolean;

  expand: boolean = false;

  expandAll: boolean = false;


  gpioList: IGPIO[] = [
    {
      pID: 0,
      bcm: '3v3 PW',
      wiringPi: '3v3 PW',
      status: true
    },
    {
      pID: 1,
      bcm: '5v PW',
      wiringPi: '5v PW',
      status: false
    },
    {
      pID: 2,
      bcm: 'BCM 2',
      wiringPi: 'Pin 8',
      status: true
    },
    {
      pID: 3,
      bcm: '5v PW',
      wiringPi: '5v PW',
      status: false
    },
    {
      pID: 3,
      bcm: 'BCM 3',
      wiringPi: 'Pin 9',
      status: false
    }
  ];

  constructor(
    private $rotator: DesignService
  ) { }

  ngOnInit(): void {
    //stay updated
    this.$rotator.currentRotation.subscribe(
      rotation => this.rotated = rotation
    );
  }

  showGPIO(){
    if (this.expand === false){
      this.expand = true;
    } else {
      this.expand = false;
    }
  }

  showAllGPIO(){
    if (this.expandAll === false){
      this.expandAll = true;
    } else {
      this.expandAll = false;
    }
  }

}
