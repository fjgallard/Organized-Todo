import { Component } from '@angular/core';
import { AuthFacade } from '@modules/login/state/auth.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'organized-todo';

  constructor(private authFacade: AuthFacade) {
    this.authFacade.loadCurrentUser();
  }
}
