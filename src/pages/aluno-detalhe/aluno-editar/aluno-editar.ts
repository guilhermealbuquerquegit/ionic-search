import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-aluno-editar',
  templateUrl: 'aluno-editar.html',
})
export class AlunoEditarPage {
  aluno: any;
  ref: FirebaseObjectObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
      this.aluno = this.navParams.get('aluno') || {};
      console.log(this.aluno);
      this.ref = this.db.object('/alunos/'+this.aluno.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoEditarPage');
  }

  atualizarAluno(){
    this.ref.update(this.aluno).then(() => {
      this.navCtrl.setRoot('AlunosPage');
    });
  }

  removerAluno(){
    this.ref.remove().then(() => {
      this.navCtrl.setRoot('AlunosPage');
    });
  }

}
