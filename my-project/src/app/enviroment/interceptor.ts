import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class IntercepterUrl implements HttpInterceptor {

    constructor(private nav: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const params = req.clone(
            {
                setHeaders: {
                    Authorization: 'Bearer ' + localStorage.getItem('userToken')
                },
                url: 'http://localhost:52556' + req.url
            }
        )

        //////////////////////////////////////////////////////////////////
        return next.handle(params).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401) {
                    localStorage.removeItem('userToken');
                    localStorage.removeItem('Id');
                    this.nav.navigate(['/login']);
                }
                return throwError(error);
            })
        );
    }
}
