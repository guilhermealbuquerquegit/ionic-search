import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoDetalhePage } from './aluno-detalhe';

@NgModule({
  declarations: [
    AlunoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoDetalhePage),
  ],
  exports: [
    AlunoDetalhePage
  ]
})
export class AlunoDetalhePageModule {}
