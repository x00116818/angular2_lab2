import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  convertmiles: number = 0;
  convertkm: number = 0;

  constructor() { }

  m2k(miles){
    
    miles=miles * 1.6;
    this.convertmiles = miles;

  }

  k2m(km){
    
    km=km * 0.6;
    this.convertkm = km;

  }

  ngOnInit() {
  }

}
