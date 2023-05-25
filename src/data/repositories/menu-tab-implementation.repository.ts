import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TabModel } from 'src/domain/models/menu.model';
import { MenuTabImplementationRepositoryMapper } from './menu/mappers/menu-tab-repository.mapper';
import { MenuTabRepository } from 'src/domain/repositories/menu.repository';



const listMenuTab: TabModel[] = [
    { text: "User", icon: 'user' },
    { text: "Register", icon:'file' },
    { text: "find", icon: 'find', badge: "New"  }
];

@Injectable({
    providedIn: 'root',
})
export class MenuTabImplementationRepository extends MenuTabRepository {
    menuMapper = new MenuTabImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getListMenuTab(): Observable<TabModel []> {
        /* return this.http
            .post<MenuEntity>('https://example.com/menu', {params})
            .pipe(map(this.menuMapper.mapFrom)); */
        return of(listMenuTab);
    }
}