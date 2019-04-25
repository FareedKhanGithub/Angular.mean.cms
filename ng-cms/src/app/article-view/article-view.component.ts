import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article';



@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }

  getArticle(id): void {
    this.articlesService.getArticle(id).subscribe(
      (response: any) => {
        this.article = response.article;
        //console.log(response);
      }
    );
  }

  deleteArticle(id: string): void {
    if(confirm("Are you sure to delete " + this.article.title)) {
      this.articlesService.deleteArticle(id).subscribe(
        ()=>{this.router.navigate(['/articles'])}
      );
    }
  }
  
}
