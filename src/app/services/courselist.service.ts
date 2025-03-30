import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseList } from '../interfaces/course-list';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {

  url = "http://localhost:3000/courseList"

  constructor(public http: HttpClient) { }

  getCourse(): Observable<CourseList[]> {
    return this.http.get<CourseList[]>(this.url)
  }

  saveCourse(list: CourseList): Observable<CourseList> {
    return this.http.post<CourseList>(this.url, list)
  }

  deleteUser(id: string): Observable<CourseList> {
    return this.http.delete<CourseList>(this.url + "/" + id)
  }


}
