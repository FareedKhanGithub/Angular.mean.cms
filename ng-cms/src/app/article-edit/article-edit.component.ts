import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  article: Article;
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }

  getArticle(id): void {
    this.articlesService.getArticle(id).subscribe(
      (response: any) => {
        this.article = response.article;
      }
    );
  }

  response(response : any): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      this.router.navigate(['/articles/view/', response.article.slug]);
    }
  }

  onSubmit(): void {
    this.articlesService.editArticle(this.article).subscribe(
      (response) => {
        this.response(response);

      }
    );
  }

}

