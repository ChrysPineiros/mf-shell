import { Mapper } from 'src/base/mapper';
import { LoginModel } from 'src/domain/models/login.model';
import { LoginEntity } from '../entities/login-entity';


export class LoginImplementationRepositoryMapper extends Mapper<LoginEntity, LoginModel> {
    mapFrom(param: LoginEntity): LoginModel {
        return {
            username: param.userName,
            password: param.password
        };
    }
    mapTo(param: LoginModel): LoginEntity {
        return {
            userName: param.username,
            password: param.password,
        }
    }
}