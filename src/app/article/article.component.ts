import {Component,
        OnInit,
        HostBinding,
        Input //<-- added
        } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input() article: Article;//<-- added

  constructor() {
//the data not as a reference but by the @Input decorator
   }

   voteUp(): boolean {
     this.article.votes +=1;
     return false;
   }
   voteDown(): boolean {
    this.article.votes -=1;
    return false;
  }

  ngOnInit() {
  }

}
