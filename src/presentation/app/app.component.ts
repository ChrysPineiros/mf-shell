import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuUseCase } from 'src/domain/usecases/menu.usecase';
import { MenuModel, TabModel } from 'src/domain/models/menu.model';
import { MenuTabUseCase } from 'src/domain/usecases/menu-tab.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isPopupVisible: boolean;
  datas:string[]=['1','2'];
 
    constructor() {
        this.isPopupVisible = true;
    }
 
    togglePopup(): void {
        this.isPopupVisible = !this.isPopupVisible;
    }
}
