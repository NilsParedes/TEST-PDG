import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URI } from './global';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    readonly URL_API = `${URI.url}/auth`;

    constructor(private http: HttpClient) { }

    login(form: any) {
        return this.http.post(this.URL_API + `/login`, form);
    }

    logout() {
        return this.http.post(this.URL_API + `/logout`, {});
    }

    register(form: any) {
        return this.http.post(this.URL_API + `/register`, form);
    }

    resetPassword(form: any) {
        return this.http.post(this.URL_API + `/reset-password/reset`, form);
    }

    sendEmail(form: any) {
        return this.http.post(this.URL_API + `/reset-password/create`, form);
    }

}