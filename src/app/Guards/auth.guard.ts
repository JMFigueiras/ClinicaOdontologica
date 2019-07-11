import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    const types = next.data['types'] as Array<string>;
    return this.checkLogin(url, types);
  }

  checkLogin(url: string, types: Array<string>): boolean {

    const token = localStorage.getItem('token');
    const tokenInfo = JSON.parse(token); 
    let check: boolean = false;

    if (tokenInfo) {

      const userType = tokenInfo['type'];
      console.log("token: ", tokenInfo);
      console.log(userType);

      this.authService.redirectUrl = '/';

      types.forEach(element =>{
      	console.log(element);
      });

      types.forEach(element => {
        if (userType === element) {
        	console.log("Entra authguard");
          check = true;
          return true;
        }
      });
    } else {
      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;
    }

    if (!check) {
      this.authService.logout();
      // Navigate to the login page with extras
      this.router.navigate(['/Login']);
    }

    return check;
  }
}