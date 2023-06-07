import { Component } from '@angular/core';
import { ProcessModel } from 'src/domain/models/process.model';
import { ProcessUseCase } from 'src/domain/usecases/process.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isPopupVisible: boolean;
  processList: ProcessModel[] = [];
  columnsProcess = [{name: 'Id', field: 'id'}, {name: 'Código', field: 'code'}, {name: 'Descripción', field: 'description'}];
    constructor(private processUseCase: ProcessUseCase) {
        this.isPopupVisible = true;
        this.processUseCase.execute().subscribe( res => this.processList = res);
    }

    selectProcess(e: any): void {
      if(e.selectedRowsData.length === 1){
        console.log('process: ', e.selectedRowsData[0]);
        this.isPopupVisible = false;
      }
    }
}
