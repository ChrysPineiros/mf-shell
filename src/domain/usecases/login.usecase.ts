import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { LoginModel } from '../models/login.model';
import { LoginRepository } from '../repositories/login.repository';


export class LoginUseCase implements UseCase<{ username: string; password: string }, LoginModel> {

    constructor(private loginRepository: LoginRepository) { }

    execute(
       params: { username: string, password: string },
    ): Observable<LoginModel> {
        return this.loginRepository.login(params);
    }
}