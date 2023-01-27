import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '@core/services/screen-size.service';

@Component({
  selector: 'core-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isHandset: boolean = false;

  constructor(private screenSizeService: ScreenSizeService) {
    this.trackScreenSize();
  }

  ngOnInit(): void {
  }

  private trackScreenSize() {
    this.screenSizeService.isHandset$.subscribe(size => {
      this.isHandset = size;
    });
  }

}
