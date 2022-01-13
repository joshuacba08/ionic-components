import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( ev: any ) {
    this.porcentaje = ev.detail.value / 100 ;
  }

}
