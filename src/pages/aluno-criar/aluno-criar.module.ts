import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoCriarPage } from './aluno-criar';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AlunoCriarPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoCriarPage),
  ],
  exports: [
    AlunoCriarPage
  ],
  providers: [
    AngularFireDatabase
  ]
})
export class AlunoCriarPageModule {}
