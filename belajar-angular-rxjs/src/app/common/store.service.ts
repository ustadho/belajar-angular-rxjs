import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class Store {
  private subject = new BehaviorSubject<Course[]>([]);
  courses$: Observable<Course[]> = this.subject.asObservable();


}
