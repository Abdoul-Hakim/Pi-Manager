import { Component, OnInit, Input } from '@angular/core';
import { ISpec } from '../ispec';

@Component({
  selector: 'pi-specs-item',
  templateUrl: './specs-item.component.html',
  styleUrls: ['./specs-item.component.sass']
})
export class SpecsItemComponent implements OnInit {

  @Input ()
  spec: ISpec;

  constructor() { }

  ngOnInit(): void {
  }

}
