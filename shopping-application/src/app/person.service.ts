import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable()
export class PersonService {

    constructor(private httpClient: HttpClient) {}

    // getPerson(): Observable<any> {
    //     // return this.httpClient.get('http://192.168.2.164:3000/users');
    //     return this.httpClient.get('http://localhost:8080/spring-mvc-example/');
    // }

    createPerson(person: Person): Observable<any> {
        return this.httpClient.post('http://localhost:8080/spring-mvc-example/post', person);
    }

    getPerson(): Observable<any> {
        return this.httpClient.get('http://localhost:3000/users');
    }
}
