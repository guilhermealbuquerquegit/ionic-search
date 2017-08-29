import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoEditarPage } from './aluno-editar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AlunoEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoEditarPage),
  ],
  exports: [
    AlunoEditarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class AlunoEditarPageModule {}
