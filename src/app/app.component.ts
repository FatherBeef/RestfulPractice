import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restfulPractice';
  posts: Observable<any>;
  users: Observable<any>;

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts');
  }

  getUsers() {
    this.posts = this.http.get(this.ROOT_URL + '/users');

  }

  constructor(private http: HttpClient) {}
}
