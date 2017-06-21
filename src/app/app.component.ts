import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  
  login(){
  $('#adminComp').show();
  $('#loginScreen').hide();
  }
}
