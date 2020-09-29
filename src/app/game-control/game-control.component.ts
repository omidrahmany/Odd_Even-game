import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  // tslint:disable-next-line:typedef
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(++this.lastNumber);
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  onPauseGame() {
    clearInterval(this.interval);
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
