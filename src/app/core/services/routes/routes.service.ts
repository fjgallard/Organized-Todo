import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesApi } from '@api/firebase/routes/routes.api';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(
    private router: Router,
    private routesApi: RoutesApi
  ) { }

  init() {
    return new Promise<void>(async (resolve, reject) => {

        // Simple example from an array. In reality, I used the response of
        // a GET. Important thing is that the app will wait for this promise to resolve
        const newDynamicRoutes = await this.routesApi.getRoutes().pipe(take(1)).toPromise() || [];
        const routes = this.router.config;

        // Create registry
        newDynamicRoutes.forEach(routeName => {
          // routes.push({ path: routeName, component: <YourComponent> });
        });

        this.router.resetConfig(routes);
        resolve();
    });
  }
}
