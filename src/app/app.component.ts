import { Component } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public media$ = new BehaviorSubject<string>('xs');

      public constructor(media: MediaObserver) {
        media.asObservable().subscribe(x =>
            this.media$.next(x[0].mqAlias)
        );
    }

    public breakpoint$ = this.media$.pipe(
        map(m => {
            return m;
        })
    );

}
