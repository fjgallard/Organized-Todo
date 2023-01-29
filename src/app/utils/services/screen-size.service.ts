import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

/**
 * Tracks screen size breakpoints, to figure out if
 * the content is being viewed in a mobile or desktop device
 */
@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  isHandset$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.init();
  }

  private init() {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}
