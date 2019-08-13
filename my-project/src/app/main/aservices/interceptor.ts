import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class Interceptor implements HttpInterceptor {
    
    token: string;
    constructor() {
        console.log('constructor I2');
        //this.token = localStorage.getItem('userToken');
        //console.log('Token : '+this.token);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('Work');
        const params = req.clone({
            setHeaders:{
                Authorization: 'Bearer '+this.token
            },
            url : '' + req.url
        }
        );

        return next.handle(params).pipe(
            catchError(error => {
                console.log(error);
                console.log('WorkError');
             return throwError(error);
            })
          );
       }
}
