import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './_helpers/authguard.guard';
import { Authguard2Guard } from './_helpers/authguard2.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [Authguard2Guard]
  },
  {
    path: 'eleve/:id',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule),
    canActivate: [AuthguardGuard]
  },
  {
    path: 'eleve',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
