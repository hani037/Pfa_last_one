import { Injectable } from '@angular/core';
import {AuthService} from "../auth-layout/shared/auth.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuditGuardService implements CanActivate {
  constructor(private authService: AuthService,private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem("audit"))
    {
      return true;
    } else {

      this.router.navigate(['/test']);
      return false;
    }


  }
}
