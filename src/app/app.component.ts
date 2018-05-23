import { Component } from '@angular/core';

export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  cars: Car[];
}
