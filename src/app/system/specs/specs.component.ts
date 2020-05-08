import { Component, OnInit } from '@angular/core';
import { ISpec } from './ispec';

@Component({
  selector: 'pi-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.sass']
})
export class SpecsComponent implements OnInit {

  specifications: ISpec[] = [
    {
      name: 'CPU',
      value: 3.40
    },
    {
      name: 'RAM',
      value: 8
    },
    {
      name: 'Storage',
      value: 128
    },
    {
      name: 'Ether',
      value: 86
    }
  ];

  showInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleInfo(){
    if (this.showInfo === false){
      this.showInfo = true;
    } else {
      this.showInfo = false;
    }
  }

}
