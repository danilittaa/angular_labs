import { Component } from '@angular/core';
import { DATA_TYPE } from './enums/enums';
import { Data } from './types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab1';
  userName = 'New User';
  helloWorld = 'Привіт, світ!';
  enumValue = DATA_TYPE;

  fakeData: Data[] = [
    {
      id: '1',
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      type: DATA_TYPE.FIRST_TYPE,
      isVisible: true,
    },
    {
      id: '2',
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      type: DATA_TYPE.FIRST_TYPE,
      isVisible: true,
    },
    {
      id: '3',
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      type: DATA_TYPE.SECOND_TYPE,
      isVisible: true,
    },
    {
      id: '4',
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      url: 'https://via.placeholder.com/600/d32776',
      type: DATA_TYPE.FIRST_TYPE,
      isVisible: true,
    },
    {
      id: '5',
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      url: 'https://via.placeholder.com/600/f66b97',
      type: DATA_TYPE.SECOND_TYPE,
      isVisible: true,
    },
    {
      id: '6',
      title: 'accusamus ea aliquid et amet sequi nemo',
      url: 'https://via.placeholder.com/600/56a8c2',
      type: DATA_TYPE.SECOND_TYPE,
      isVisible: true,
    },
    {
      id: '7',
      title: 'officia delectus consequatur vero aut veniam explicabo molestias',
      url: 'https://via.placeholder.com/600/b0f7cc',
      type: DATA_TYPE.FIRST_TYPE,
      isVisible: true,
    },
  ];
}
