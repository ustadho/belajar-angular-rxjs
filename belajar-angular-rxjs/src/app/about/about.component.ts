import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent, Observable} from 'rxjs';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  beginerCourses$: Observable<Course[]>;
  advanceCourses$: Observable<Course[]>;

  constructor() { }

  ngOnInit() {
    const http$ : Observable<Course[]> = createHttpObservable('/api/courses');

      const courses$ = http$
        .pipe(
          tap(() => console.log('Http request executed')),
          map(res => Object.values(res['payload'])),
          shareReplay() //preventing duplicate Http request
        );
      courses$.subscribe();

      this.beginnerCourses$ = courses$
        .pipe(
          map(courses => courses
            .filters(course => course.category=='BEGINER'))
        );

      this.advanceCourses$ = courses$
        .pipe(
          map(courses => courses
            .filters(course => course.category=='ADVANCE'))
        );

  }

}
