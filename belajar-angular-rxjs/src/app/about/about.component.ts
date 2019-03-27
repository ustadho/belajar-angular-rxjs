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
    const interval$ = interval(1000);
    const sub = interval$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(), 5000);

    const http$ = createHttpObservable('/api/courses');
    const sub2 = http$.subscribe(console.log);

    setTimeout(() => sub2.unsubscribe(), 0);
  }

}
