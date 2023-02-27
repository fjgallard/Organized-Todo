import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoutesApi {

  private $loadedRoutes = new Subject<boolean>();

  loadedRoutes$ = this.$loadedRoutes.asObservable();

  loadedRoutes: boolean = false;

  todoRoute = '';
  dashboardRoute = '';
  loginRoute = '';

  constructor(private db: AngularFirestore) {
    this.getRoutes().subscribe((res: any) => {
      console.log(res);

      this.$loadedRoutes.next(true);
      this.loadedRoutes = true;
      this.todoRoute = res[0]?.todo;
    });


  }

  getRoutes() {
    return this.db.collection('routes').valueChanges();
  }

  tempLoad() {

  }
}
