import { Observable } from 'rxjs';
import { MenuModel, TabModel } from '../models/menu.model';

export abstract class MenuRepository {
    abstract getListMenu(params: {username: string}):  Observable<MenuModel []>;
    //abstract getListMenu(params: {username: string}): MenuModel[];
}

export abstract class MenuTabRepository {
    abstract getListMenuTab():  Observable<TabModel []>;
}