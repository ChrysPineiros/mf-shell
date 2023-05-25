import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';


export abstract class LoginRepository {
    abstract login(params: {username: string, password: string}): Observable<LoginModel>;
}