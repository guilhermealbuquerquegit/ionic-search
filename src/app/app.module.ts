import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { DataProvider } from '../providers/data/data';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDJRxBnmEtXLfZM9d0XWCP5kWSjL92wVxI",
    authDomain: "crud-ionic-3efcf.firebaseapp.com",
    databaseURL: "https://crud-ionic-3efcf.firebaseio.com",
    projectId: "crud-ionic-3efcf",
    storageBucket: "crud-ionic-3efcf.appspot.com",
    messagingSenderId: "895951728781"
  }
};


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'fa411a73'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ],
  
})
export class AppModule {}
