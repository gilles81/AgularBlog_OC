import { Component , Input , OnInit} from '@angular/core';
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngBlog';
  posts = [
    {
      title: 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.' +
        ' Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam' +
        'magni quis!',
      loveIt: 10
    },
    {
      title: 'Mon deuxième post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.' +
        ' Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam' +
        'magni quis!',
      loveIt: 2
    },
    {
      title: 'Encore un post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.' +
        ' Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam' +
        'magni quis!',
      loveIt: 0
    }
  ];
}
