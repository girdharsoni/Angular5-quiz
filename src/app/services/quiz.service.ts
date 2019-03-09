import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  get(url: string) {
    return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
  }

  getAll() {
    return [
      { id: 'data/aspnet.json', name: 'Angularjs' },
      { id: 'data/csharp.json', name: 'Reactjs' },
      { id: 'data/designPatterns.json', name: 'HTML' }
    ];
  }

  getmy(i) {
    if(i==1)
    {
    return [
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      ];
  }
  else if(i==2)
  {
    return[
    { id: 'data/csharp.json', name: 'C Sharp' },
    ];
  }
else
{
  return[
  { id: 'data/designPatterns.json', name: 'Design Patterns' }
  ];
}
  }



}
