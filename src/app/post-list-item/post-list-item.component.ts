import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedDate: string;

  postLoveIt = 0;
  postDontLoveIt =  0;

  constructor() { }

  ngOnInit() {
  }

  onAddLike() {
    this.postLoveIt = this.postLoveIt + 1;
    return this.postLoveIt;
   }
  onDisLike() {
      this.postDontLoveIt = this.postDontLoveIt + 1;
      return this.postDontLoveIt;
  }
  computeLoveIts() {
    return  this.postLoveIt - this.postDontLoveIt;
  }
}
