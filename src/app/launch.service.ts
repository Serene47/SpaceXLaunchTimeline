
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

import { Launch } from './Launch'
import { Observable } from 'rxjs';


@Injectable({ providedIn : 'root'})
export class LaunchService {

  constructor(private http:HttpClient){}

  getLaunches() : Observable<Launch[]> {

    return this.http.get('https://api.spacexdata.com/v4/launches/past')
      .pipe(
        map(
          (response:{ [key:string] : any}[]) => {

            return response.map( (entry) => {

              return new Launch(entry.name,entry.date_local,
                entry.details,entry.links.patch.small)

            }).sort((entry1,entry2) => {

              return entry2.lauchDate.getTime() -  entry1.lauchDate.getTime();

            });

          }
        )
      );

  }

}
