import { UseCase } from 'src/base/use-case';
import { MenuRepository } from '../repositories/menu.repository';
import { MenuModel } from '../models/menu.model';
import { Observable } from 'rxjs';


export class MenuUseCase implements UseCase<{ username: string }, MenuModel[]> {

    constructor(private menuRepository: MenuRepository) { }

    execute(
       params: { username: string},
    ): Observable<MenuModel[]> {
        return this.menuRepository.getListMenu(params);
    }
}