import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginImplementationRepositoryMapper } from './login/mappers/login-repository.mapper';
import { LoginRepository } from 'src/domain/repositories/login.repository';
import { LoginModel } from 'src/domain/models/login.model';
import { LoginEntity } from './login/entities/login-entity';

@Injectable({
    providedIn: 'root',
})
export class LoginImplementationRepository extends LoginRepository {
    loginMapper = new LoginImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    login(params: {username: string, password: string}): Observable<LoginModel> {
        return this.http
            .post<LoginEntity>('https://example.com/login', {params})
            .pipe(map(this.loginMapper.mapFrom));
    }
}