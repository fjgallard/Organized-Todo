import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenSizeService } from '@core/services/screen-size.service';

@Component({
  selector: 'core-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  isHandset: boolean = false;

  constructor(private screenSizeService: ScreenSizeService, private router: Router) {
    this.trackScreenSize();
  }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/todo']);
  }

  private trackScreenSize() {
    this.screenSizeService.isHandset$.subscribe(size => {
      this.isHandset = size;
    });
  }

}
