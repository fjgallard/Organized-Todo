import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@modules/login/state/auth.facade';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  authState: Observable<any>;
  constructor(private authFacade: AuthFacade) {
    this.authState = this.authFacade.currentUser$;
  }

  ngOnInit(): void {
    this.authState.subscribe(res => console.log(res));
  }

}
