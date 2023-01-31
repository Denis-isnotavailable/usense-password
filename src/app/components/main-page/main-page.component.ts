import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
  password: string = '';
  isHide: boolean = false;
  type: string = 'text';

  colors: string[] = ['#d1cccc', '#c43737', '#f3ee58', '#6af358']; // grey, red, yellow, green
  colorEasy: string = this.colors[0];
  colorMedium: string = this.colors[0];
  colorStrong: string = this.colors[0];

  str = new RegExp('[a-zA-Z]');
  num = new RegExp('[0-9]');
  dig = new RegExp('[^A-Za-z0-9]');

  constructor() { }

  ngOnInit(): void { }

  ngDoCheck() {    
    let isLetter = this.str.test(this.password);
    let isNumber = this.num.test(this.password);
    let isDigit = this.dig.test(this.password);

    if (this.password.length === 0) {
      this.colorEasy = this.colors[0];
      this.colorMedium = this.colors[0];
      this.colorStrong = this.colors[0];
    } else if (this.password.length < 8) {
      this.colorEasy = this.colors[1];
      this.colorMedium = this.colors[1];
      this.colorStrong = this.colors[1];
    } if (isLetter || isNumber || isDigit) {
      this.colorEasy = this.colors[1];
      this.colorMedium = this.colors[0];
      this.colorStrong = this.colors[0];
    } if (isLetter && isNumber || isLetter && isDigit || isNumber && isDigit) {
      this.colorEasy = this.colors[2];
      this.colorMedium = this.colors[2];
      this.colorStrong = this.colors[0];
    } if (isLetter && isNumber && isDigit) {
      this.colorEasy = this.colors[3];
      this.colorMedium = this.colors[3];
      this.colorStrong = this.colors[3];
    }

    this.isHide ? this.type = 'password' : this.type = 'text';

  }


  changePasswordView(): void {
    this.isHide = !this.isHide;
  }

  

}
