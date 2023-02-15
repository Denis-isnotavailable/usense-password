import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-zone',
  templateUrl: './check-zone.component.html',
  styleUrls: ['./check-zone.component.scss']
})
export class CheckZoneComponent {

  @Input() password!: string;

  colorEasy!: string;
  colorMedium!: string;
  colorStrong!: string;

  initialState(): void {
    this.colorEasy = Colors.GREY;
    this.colorMedium = Colors.GREY;
    this.colorStrong = Colors.GREY;
  }

  lessThanEight(): void {
    this.colorEasy = Colors.RED;
    this.colorMedium = Colors.RED;
    this.colorStrong = Colors.RED;
  }

  ngDoCheck() {
    const middle = new RegExp('(?=.*[A-Za-z])(?=.*[0-9])|(?=.*[^A-Za-z0-9])(?=.*[a-zA-Z])|(?=.*[^A-Za-z0-9])(?=.*[0-9])').test(this.password);
    const strong = new RegExp('(?=.*[^A-Za-z0-9])(?=.*[A-Za-z])(?=.*[0-9])').test(this.password);

    if (this.password.length === 0) {
      this.initialState();
      return;
    } else if (this.password.length < 8) {
      this.lessThanEight();
      return;
    }

    this.initialState();
    this.colorEasy = Colors.RED;

    if (middle) {
      this.colorEasy = Colors.YELLOW;
      this.colorMedium = Colors.YELLOW;
    }
    if (strong) {
      this.colorEasy = Colors.GREEN;
      this.colorMedium = Colors.GREEN;
      this.colorStrong = Colors.GREEN;
    }

  } 
}

const Colors = {
  GREY: '#d1cccc',
  RED: '#c43737',
  YELLOW: '#f3ee58',
  GREEN: '#6af358'
}
