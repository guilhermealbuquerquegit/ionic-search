import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-aluno-criar',
  templateUrl: 'aluno-criar.html',
})
export class AlunoCriarPage {
  aluno: any;
  ref: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.aluno = {};
    this.ref = this.db.list('/alunos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoCriarPage');
  }

  salvarAluno(){
    console.log(this.aluno);
    this.ref.push(this.aluno).then(() => {
      this.navCtrl.setRoot('AlunosPage');
    });
  }

}
