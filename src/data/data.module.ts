import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginRepository } from 'src/domain/repositories/login.repository';
import { LoginUseCase } from 'src/domain/usecases/login.usecase';
import { LoginImplementationRepository } from './repositories/login-implementation.repository';
import { MenuRepository, MenuTabRepository } from 'src/domain/repositories/menu.repository';
import { MenuImplementationRepository } from './repositories/menu-implementation.repository';
import { MenuUseCase } from 'src/domain/usecases/menu.usecase';
import { MenuTabUseCase } from 'src/domain/usecases/menu-tab.usecase';
import { MenuTabImplementationRepository } from './repositories/menu-tab-implementation.repository';

const loginUseCaseFactory = 
(loginRepo: LoginRepository) => new LoginUseCase(loginRepo);
export const userLoginUseCaseProvider = {
    provide: LoginUseCase,
    useFactory: loginUseCaseFactory,
    deps: [LoginRepository],
};

const menuUseCaseFactory = 
(menuRepo: MenuRepository) => new MenuUseCase(menuRepo);
export const menuUseCaseProvider = {
    provide: MenuUseCase,
    useFactory: menuUseCaseFactory,
    deps: [MenuRepository],
};

const menuTabUseCaseFactory = 
(menuTabRepo: MenuTabRepository) => new MenuTabUseCase(menuTabRepo);
export const menuTabUseCaseProvider = {
    provide: MenuTabUseCase,
    useFactory: menuTabUseCaseFactory,
    deps: [MenuTabRepository],
};

@NgModule({
  declarations: [],
  providers: [
    userLoginUseCaseProvider,
    menuUseCaseProvider,
    menuTabUseCaseProvider,
    { provide: LoginRepository, useClass: LoginImplementationRepository },
    { provide: MenuRepository, useClass: MenuImplementationRepository },
    { provide: MenuTabRepository, useClass: MenuTabImplementationRepository }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule { }
