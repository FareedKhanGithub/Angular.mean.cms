import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  article = new Article();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit(): void{
  }

  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      this.router.navigate(['/articles/view/', response.article.slug]);
    }
  }

  onSubmit(): void{
    this.articlesService.createArticle(this.article).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }
}
