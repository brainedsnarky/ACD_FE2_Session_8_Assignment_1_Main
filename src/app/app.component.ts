import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

}
