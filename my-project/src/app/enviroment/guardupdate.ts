import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export class GuardUpdate implements CanActivate
{
    constructor(private nav: Router )
    {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(route.params['id'] == localStorage.getItem('Id'))
        {
            return true;
        }
        this.nav.navigate['/main'];
        return false;
    }
    
}