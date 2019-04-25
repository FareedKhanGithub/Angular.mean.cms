import { Component, OnInit } from '@angular/core';

//Import the UserService
import { ArticlesService } from '../articles.service';

// Import the User Object/Schema
import {Article} from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  
  articles: Article
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }
  
  //create a local wrapper for
  getArticles(): void{
    this.articlesService.getArticles().subscribe(
      (response : any) => {
        this.articles = response.articles;
        //console.log(this.articles);
      }
    );
  }
}

