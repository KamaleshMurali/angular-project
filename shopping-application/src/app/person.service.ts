import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person } from './person.model';

@Injectable()
export class PersonService {

    userTable = new Subject();
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

    deletePerson(personId: number): Observable<any> {
        return this.httpClient.delete('http://localhost:8080/online-shopping-application/delete/' + personId);
    }

    update(person: Person): Observable<any> {
        return this.httpClient.put('http://localhost:8080/online-shopping-application/', person);
    }

    onsiteSurvey(): Observable<any> {
        return this.httpClient.get('http://localhost:3000/data');
    }
 }
