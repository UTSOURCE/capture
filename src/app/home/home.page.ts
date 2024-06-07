import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/angular/standalone';
import { MediaCapture } from '@whiteguru/capacitor-plugin-media-capture';
import {Capacitor} from "@capacitor/core";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton],
})
export class HomePage {
  constructor() {}
  async open(){
    MediaCapture.captureVideo({duration: 10}).then(async (data: any) => {
        console.log(data);
        const contents = Capacitor.convertFileSrc(data.file.path);
        let blob = await fetch(contents).then(r => r.blob());
        console.log(blob);
      })
  }
}
