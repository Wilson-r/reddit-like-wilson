import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article', //Il tag per inserire il componente sarà <app-article>
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() article:Article = undefined!;


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
