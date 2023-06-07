import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxTabsModule } from 'devextreme-angular';
import { DxTreeViewModule } from 'devextreme-angular';
import { DataModule } from 'src/data/data.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { LibDesignSystemModule } from '@mycne/lib-design-system';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabsModule,
    DxTreeViewModule,
    DataModule,
    LibDesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
