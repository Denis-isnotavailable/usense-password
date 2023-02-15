import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
  
export class AppComponent {
  title: string = 'usense-password';
  passwordApp: string = '';

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      formPassword: new FormControl('')
    })
  }

  ngDoCheck() { 
    this.form.valueChanges.subscribe(v => {
      // console.log("form: ", v)
      this.passwordApp = v.formPassword;
    });
    
  }
}
