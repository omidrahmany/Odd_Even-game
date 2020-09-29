import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  // tslint:disable-next-line:typedef
  public onIntervalFired(data: number) {
    console.log(data);
    if (data % 2 === 0) {
      this.evenNumbers.push(data);
    } else {
      this.oddNumbers.push(data);
    }

  }
}
