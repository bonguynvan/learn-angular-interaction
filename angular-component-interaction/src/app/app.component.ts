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
    this.result = "Tôi là AppComponent. Sau khi bạn click thì tôi đã nhận được một string: '" + st + "' từ thằng HelloComponent"
      + " và nhìn tôi biến nó thành chữ hoa nè: " + st.toUpperCase()
}
}

