import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent, Observable, Subject, BehaviorSubject} from 'rxjs';
import { createHttpObservable } from '../common/util';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const subject = new BehaviorSubject(0);
    const series$ = subject.asObservable();

    series$.subscribe(val => console.log("early sub: "+val ));

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete(); //for behaviour subject it's mean no longer subject

    setTimeout(() => {
      series$.subscribe(val => console.log('late sub: '+val));
      subject.next(4);
    }, 3000);
  }

}
