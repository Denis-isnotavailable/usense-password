import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent { 
  
  password: string = '';
  isHide: boolean = false;
  type: string = 'text';

  @Output() newPasswordEvent = new EventEmitter<string>();

  addNewPassword(value: string) {
    this.newPasswordEvent.emit(value);
  } 
  
  // constructor() { }

  // ngOnInit(): void { }

  ngDoCheck() { 
    this.addNewPassword(this.password);

    this.isHide ? this.type = 'password' : this.type = 'text';
  }

  changePasswordView(): void {
    this.isHide = !this.isHide;
  }  

}
