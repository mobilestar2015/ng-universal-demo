import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';
import { config } from '../config';

@Component({
	selector: 'home-view',
	templateUrl: 'home.component.html'
})
export class HomeView implements OnInit {
  public subs: Observable<string>;

  constructor(private http: TransferHttp) {}

  ngOnInit() {
    this.subs = this.http.get(config.baseUrl + 'data').map(data => {
      return `${data.greeting} ${data.name}`;
    });
  }
}
