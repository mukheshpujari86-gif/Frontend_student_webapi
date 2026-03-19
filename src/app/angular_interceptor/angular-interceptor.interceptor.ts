import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AngularInterceptorInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(

      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {
          // Unauthorized
          alert('Session expired. Please login again');
          //this.router.navigate(['/login']);
          this.router.navigate(['/']);
        }

        else if (error.status === 403) {
          alert('Access Denied');
        }

        else if (error.status === 404) {
          alert('API Not Found');
        }

        else if (error.status === 500) {
          alert('Server Error');
        }
        

        else {
          alert('Something went wrong');
        }

        console.error('Error:', error);

        return throwError(() => error);
      })

    );
  }
}
