import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunosPage } from './alunos';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AlunosPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunosPage),
  ],
  exports: [
    AlunosPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class AlunosPageModule {}
