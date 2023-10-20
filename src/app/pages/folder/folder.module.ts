import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AccueilComponent } from 'src/app/components/accueil/accueil.component';
import { CoursComponent } from 'src/app/components/cours/cours.component';
import { AbsencesComponent } from 'src/app/components/absences/absences.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [AccueilComponent, CoursComponent, FolderPage, AbsencesComponent]
})
export class FolderPageModule {}
