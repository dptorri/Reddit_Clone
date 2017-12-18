import {  Component,
          OnInit,
          Input //<-- added to accept input
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
//name: string; //<-- added name property
@Input() name: string;
  constructor() {
    //this.name = 'Daniel';
   }

  ngOnInit() {
  }

}
