import { NgModule } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { IonMediaCacheDirective } from './ion-media-cache.directive';

@NgModule({
  declarations: [IonMediaCacheDirective],
  exports: [IonMediaCacheDirective],
  imports: [
  ],
  providers: [
    File,
    WebView
  ]
})
export class IonMediaCacheModule { }
