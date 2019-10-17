import { Component , Input , OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngBlog';

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  posts = [
    {
      title: 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.' +
        ' Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam' +
        'magni quis!',
      loveIts: 0,
      created_at :  new Date()

    },
    {
      title: 'Mon deuxième post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.' +
        ' Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam' +
        'magni quis!',
      loveIts: 0,
      created_at : new Date()
    },
    {
      title: 'Encore un post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.' +
        ' Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam' +
        'magni quis!',
      loveIts: 0,
      created_at : new Date()
    }
  ];
}
