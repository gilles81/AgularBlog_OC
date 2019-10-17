import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  likeStatus: boolean;

  constructor() { }

  ngOnInit() {
  }

  onAddLike() {
    this.postLoveIt = this.postLoveIt + 1;
   }
  onDisLike() {
    if (this.postLoveIt > 0) {
      this.postLoveIt = this.postLoveIt - 1;
    }
  }
  alertStatus() {
    if (this.postLoveIt > 20) {
      return this.likeStatus = true;
    } else {
      return this.likeStatus = false;
    }
  }
}
