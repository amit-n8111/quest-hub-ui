import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EntitlementService } from './entitlement.service';

@Injectable()
export class ApiGatewayInterceptorService implements HttpInterceptor {
    constructor(private entitlementService: EntitlementService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.entitlementService.userDetails ? this.entitlementService.userDetails : '';

        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            'Cache-Control': 'no-cache'
        });

        headers = headers.set('sm_user', currentUser);

        const cloneReq = request.clone({ headers });

        return next.handle(cloneReq);
    }
}
