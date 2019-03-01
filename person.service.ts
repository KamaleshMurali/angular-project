import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Person } from './person.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonService {

    constructor(private httpClient: HttpClient) {}

    getPerson(): Observable<any> {
        return this.httpClient.get('http://localhost:3000/users');
    }
}
