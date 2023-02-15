import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'usense-password';
  passwordApp: string = '';

  addPassword(updatedPassword: string) {
    this.passwordApp = updatedPassword;
  }
}
