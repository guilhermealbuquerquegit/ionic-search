import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-aluno-detalhe',
  templateUrl: 'aluno-detalhe.html',
})
export class AlunoDetalhePage {
  aluno: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.aluno = this.navParams.get('aluno') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoDetalhePage');
  }

  editarAluno(){
    this.navCtrl.push('AlunoEditarPage', {aluno: this.aluno});
  }
}
