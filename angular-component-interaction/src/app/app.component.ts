import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-interaction';
  ng = 'Angular' ;
  result = '' ;

  upCase = (st:string) => {
    this.result = "Tôi là AppComponent. Tôi nhận một string: '" + st + "' từ thằng HelloComponent"
      + " và nhìn tôi biến nó thành chữ hoa nè: " + st.toUpperCase()
}
}

