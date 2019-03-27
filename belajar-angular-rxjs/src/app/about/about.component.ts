import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const interval$ = interval(1000); //blue print of stream, have not initialized yet
    interval$.subscribe((ke) => console.log('Interval Stream 1 ' + ke));
    interval$.subscribe((ke) => console.log('Interval Stream  2 ' + ke));

    const timer$ = timer(3000, 1000); //blue print of stream, have not initialized yet
    timer$.subscribe((ke) => console.log('Timer Stream ' + ke));

    const clicks = fromEvent(document, 'click');
    clicks.subscribe(evt => console.log(evt));
  }

}
