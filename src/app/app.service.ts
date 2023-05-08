import { Injectable } from '@angular/core';
 
export class Menu {
    ID?: string;
    name?: string;
    categoryId?: string;
}
 
const listMenu: Menu[] = [
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
    providedIn: 'root'
})
export class MenuService {
    getListMenu(): Menu[] {
        return listMenu;
    }
}