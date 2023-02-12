import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '@core/services/auth/auth-firebase.service';
import { AuthFacade } from '@core/state/auth.facade';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  authState: Observable<any>;
  constructor(private auth: AuthFirebaseService, private authFacade: AuthFacade) {
    this.authState = this.authFacade.currentUser$;
  }

  ngOnInit(): void {
    this.authState.subscribe(res => console.log(res));
  }

}
