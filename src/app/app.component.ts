import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, Menu } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-shell';
  listMenu: Menu[]=[];
  tabs = [
    { text: "User", icon: 'user' },
    { text: "Register", icon:'file' },
    { text: "find", icon: 'find', badge: "New",  }
  ];

  constructor(private router: Router, service: MenuService) {
    this.listMenu = service.getListMenu();
  }

  onItemClick(e: any) {
    switch (e.itemData.text)
      {
        case 'User': 
            this.router.navigate(['/', 'user']);
        break;
        case 'Register':
            this.router.navigate(['/', 'register']);
        break;
        case 'Find': 
            console.log("Find");
        break;
        default: 
            alert('no se encontro página');
      } 
  }

  selectMenu(e: any) {
    console.log(e);
    switch (e.itemData.name)
      {
        case 'Agregar Usuario':
            this.router.navigate(['/', 'user']);
        break;
        case 'Actualizar Usuario':
            this.router.navigate(['/', 'register']);
        break;
        case 'Eliminar Usuario': 
            console.log("Find");
        break;
        default: 
            alert('no se encontro página');
      } 
  }

}
