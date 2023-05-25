import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel } from 'src/domain/models/menu.model';
import { MenuRepository } from 'src/domain/repositories/menu.repository';
import { MenuImplementationRepositoryMapper } from './menu/mappers/menu-repository.mapper';
import { MenuEntity } from './menu/entities/menu-entity';


const listMenu: MenuModel[] = [
    {
        ID: "1",
        name: "Usuarios"
    }, {
        ID: "1_1",
        categoryId: "1",
        name: "Lista Usuarios"
    }, {
        ID: "1_1_1",
        categoryId: "1_1",
        name: "Agregar Usuario"
    }, {
        ID: "1_1_2",
        categoryId: "1_1",
        name: "Actualizar Usuario"
    }, {
        ID: "1_1_3",
        categoryId: "1_1",
        name: "Eliminar Usuario",
    }
];

@Injectable({
    providedIn: 'root',
})
export class MenuImplementationRepository extends MenuRepository {
    menuMapper = new MenuImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getListMenu(params: {username: string }): Observable<MenuModel []> {
        /* return this.http
            .post<MenuEntity>('https://example.com/menu', {params})
            .pipe(map(this.menuMapper.mapFrom)); */
        return of(listMenu);
    }
}