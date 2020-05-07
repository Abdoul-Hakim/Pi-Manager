import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design/design.service';

@Component({
  selector: 'pi-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.sass']
})
export class SystemComponent implements OnInit {

  rotated: boolean;

  constructor(
    private $rotator: DesignService
  ) { }

  ngOnInit(): void {
    //stay updated
    this.$rotator.currentRotation.subscribe(
      rotation => this.rotated = rotation
    );
  }

}
