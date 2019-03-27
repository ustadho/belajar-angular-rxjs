import { Observable, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beginnerCourse$: Observable<Course[]>;
  advanceCourse$: Observable<Course[]>;

  constructor() { }

  ngOnInit() {
    const http$ = createHttpObservable('/api/courses');
    const courses$: Observable<Course[]> = http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map(res => Object.values(res['payload'])),
        shareREplay(),
        retryWhen(errors =>
          errors.pipe(
            delayWhen(() => timer(2000)
          ))
      );

      this.beginnerCourse$ = courses$
      .pipe(
        map(courses => courses
          .filter(course => course.category =='BEGINER'))
      );

      this.advanceCourse$ = courses$
      .pipe(
        map(courses => courses
          .filter(course => course.category =='ADVANCE'))
      );

  }

}
