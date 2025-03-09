import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  postBlog(data: any) {
    return this.http.post<any>('https://ng-angular-testing-default-rtdb.firebaseio.com/blogs.json', data)
  }

  getBlog() {
    return this.http.get<any>('https://ng-angular-testing-default-rtdb.firebaseio.com/blogs.json')
  }
}
