import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


export class Guard implements CanActivate
{
    constructor(private nav:Router)
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
    {
        console.log('GuardWork');
        if(localStorage.getItem('userToken'))
        {
            return true;
        }
        this.nav.navigate(['/login']);
        return false;
    }
    /*canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean 
    {
        return confirm('Do you want to move child?');
    }*/
}