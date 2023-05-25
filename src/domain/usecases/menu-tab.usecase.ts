import { UseCase } from 'src/base/use-case';
import { TabModel } from '../models/menu.model';
import { Observable } from 'rxjs';
import { MenuTabRepository } from '../repositories/menu.repository';



export class MenuTabUseCase implements UseCase<{ }, TabModel[]> {

    constructor(private vertmenuRepository: MenuTabRepository) { }

    execute(): Observable<TabModel[]> {
        return this.vertmenuRepository.getListMenuTab();
    }
}