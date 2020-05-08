import { Component, OnInit, Input } from '@angular/core';
import { IGPIO } from '../igpio';

@Component({
  selector: 'pi-gpio-spec-item',
  templateUrl: './gpio-spec-item.component.html',
  styleUrls: ['./gpio-spec-item.component.sass']
})
export class GpioSpecItemComponent implements OnInit {

  @Input()
  gpio: IGPIO;

  constructor() { }

  ngOnInit(): void {
  }

}
