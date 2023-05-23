import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';
import { microFrontendsDev } from 'src/assets/microapp-dev';

/* const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost/mf-user/remoteEntry.js',
        exposedModule:'./UserModule'
    }).then((m) => m.UserModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost/mf-user/remoteEntry.js',
        exposedModule:'./UserModule'
    }).then((m) => m.UserModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost/mf-register/remoteEntry.js',
        exposedModule:'./RegisterModule'
    }).then((m) => m.RegisterModule),
  },
]; */

const routes: Routes = [
...environment.microFrontends.map(mf=> ({
  path: mf.baseUrl, // we insert any routes defined in the remote module we load 
  //as children of `mf.baseUrl` route
  //loadChildren: () => loadRemoteModule(mf).then(m => m[mf.moduleName])
  loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: mf.remoteEntry,
        exposedModule: mf.exposedModule
  }).then(m => m[mf.moduleName])
}))];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
