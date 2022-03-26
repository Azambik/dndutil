import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private httpsClient: HttpClient) {}

    server = environment.serverAddress + ':' + environment.serverPort;

    getAllUsers(): Observable<User[]>{
        return this.httpsClient.get<User[]>(this.server + '/allusers');
    }
}