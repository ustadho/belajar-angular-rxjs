import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent, Observable, Subject} from 'rxjs';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const subject = new Subject();
    const series$ = subject.asObservable();

    series$.subscribe(console.log);

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();
  }

}
