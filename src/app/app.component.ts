import { Component } from '@angular/core';

import { Launch } from './Launch';
import { LaunchService } from './launch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SpaceX Launch Timeline';

  showError = false;
  showLoader = true;
  showTimeline = false;

  launches:Launch[];

  constructor(private launchService:LaunchService) { }

  ngOnInit(): void {

    this.launchService.getLaunches()
      .subscribe(
        (response:Launch[]) =>  {

          this.showLoader = false;

          this.showTimeline = true;

          this.launches = response;
        },
        (error:any) => {

          this.showLoader = false;

          this.showError = true;

        }
      )

  }
}
