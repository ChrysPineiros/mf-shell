import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel, TabModel } from 'src/domain/models/menu.model';
import { MenuTabUseCase } from 'src/domain/usecases/menu-tab.usecase';
import { MenuUseCase } from 'src/domain/usecases/menu.usecase';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  listMenu: MenuModel[]=[];
  tabs: TabModel[]= [];
  hiden: boolean = false;
  topHeader: any = {
    firsName: "Christian ",
    lastname: "Piñeiros",
  };
  constructor(private router: Router, private menuUseCase: MenuUseCase, private menuTabUseCase: MenuTabUseCase,) {
    this.getMenu();
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
  };

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
            this.getMenu();
        break;
        default: 
            alert('no se encontro página');
      } 
  };

  getMenu(){
    this.menuTabUseCase.execute().subscribe( res => this.tabs = res);
    this.menuUseCase.execute({ username:''}).subscribe( res => this.listMenu = res);
  };

  public async onLogout(): Promise<void> {
    return ;
  }
}
