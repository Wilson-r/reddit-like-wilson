import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article', //Il tag per inserire il componente sarà <app-article>
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  article:Article

  constructor() {
    this.article = new Article('Articolo bello bello','http://angular.io',10);
  }

  voteUp():Boolean {
    this.article.voteUp();
    return false; 
}
voteDown():Boolean{
    this.article.voteDown();
    return false; 
}

  ngOnInit() {}
}
