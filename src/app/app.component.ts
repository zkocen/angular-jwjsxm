import { Component } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public mode: string;
  public sidebar: MatSidenav;
  public breakpoint: any;
  public media$ = new BehaviorSubject<string>('xs');

      public constructor(media: MediaObserver) {
        media.asObservable().subscribe(x =>
            this.media$.next(x[0].mqAlias)
        );
    }

    public sideBarMode$ = this.media$.pipe(
        map(m => {
            this.breakpoint = m;
            console.log('this.breakpoint', this.breakpoint);
            return m === 'xs' || m === 'sm' ? 'over' : 'side';
        })
    );

}
