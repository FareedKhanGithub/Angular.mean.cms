import { Injectable } from '@angular/core';

//1. Import HTTP libs for API calls
import { HttpClient, HttpHeaders} from '@angular/common/http';

//Import Observable
import { Observable } from 'rxjs';

// Import the User object
import { Article } from './article';

// Set outbound HTTP headers to JSON
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class ArticlesService {

  //Set up the URL
  private url: string = 'http://localhost:3000/api/articles';
  
  //Call the HttpClinet in the Constructor
  constructor(private http: HttpClient) {}

  // Set up a simple observable 
  getArticles(): Observable<Article>{
    return this.http.get<Article>(this.url);
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }

  createArticle(article: Article): Observable<Article>{
    return this.http.post<Article>(this.url, article, httpOptions);
  }

  editArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.url, article, httpOptions);
  }

  deleteArticle ( id: string): Observable<Article>{
    return this.http.delete<Article>(`${this.url}/${id}`);
  }
}