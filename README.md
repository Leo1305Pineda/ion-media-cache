# Ion Media Cache

Directive cache multimedia.

## Usage notice
With this directive you can download file to the device using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and render the source in the component. If your application is PWA, it use FileSystem to save the blob.
 

## Supported Platforms.
    * Android
    * Browser
    * Ios

## Installation

`npm i ion-media-cache@latest`.

### Require installation ionic native

[File](https://ionicframework.com/docs/native/file)

```bash
npm install cordova-plugin-file
npm install @ionic-native/file
ionic cap sync
```
[Ionic Webview](https://ionicframework.com/docs/native/ionic-webview)

```bash
npm install cordova-plugin-ionic-webview
npm install @ionic-native/ionic-webview
ionic cap sync
```

## Quickstart

Import ion-media-cache in you module page.

```typescript
// Import the module
import { IonMediaCacheModule } from 'ion-media-cache';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
...
@NgModule({
    (...)
    imports: [
        IonMediaCacheModule
    ],
    providers: [
        File,
        WebView
    ]
    (...)
})
export class PageModule {}
```

## Usage

### image
```html
<img [url]="image" [customCache]="{fallbackUrl: '/assets/img/default.png'}" alt="ion-media-cache" />

<ion-img [url]="image" [customCache]="{fallbackUrl: '/assets/img/default.png'}"></ion-img>
```

### custom div background
```html
<div
    [url]="image"
    [customCache]="{fallbackUrl: '/assets/img/default.png', render: 'background-image', spinner: false, fallbackReload: false}"
    style="background-repeat: no-repeat;background-position: center;background-size: cover;width: 100%;height: 100%;">
</div>
```

### audio
```html
<audio controls name="media">
  <source [url]="audio" customCache>
</audio>
```

## Events

```html
<ion-img
    #elRef
    [url]="image"
    [customCache]="{ fallbackUrl: '/assets/img/bienvenida.png', cache_expire: {time: n.component?.expire_subimage, data: data } }"
    (onExpireCache)="onExpireCache($event, elRef)"
    (ionImgDidLoad)="ionImgDidLoad($event)"
    (ionError)="ionError($event)">
</ion-img>
```

```typescript
onExpireCache(event) {
    console.log(event);
    event.el.clearImageCache(event.data.url);
}
ionImgDidLoad(event) {
    console.log(event);
}
ionError(event) {
    console.log(event);
}
```

## Optional properties

```typescript
customCache = {
    debugMode: false,                       // boolean default = false;
    enabled: true,                          // booleandefault = true;
    corsFromHeroku: '',                     // string = '' | 'http://cors-anywhere.herokuapp.com/'; fix https://stackoverflow.com/a/21136980/7638125
    fallbackUrl: '',                        // string usage uri fail 'assetes/img/default.png'.
    concurrency: 5,                         // number default = 5, only on android, ios.
    maxCacheSize: -1,                       // number default -1, without limit.
    maxCacheAge: -1,                        // number default -1, without limit.
    httpHeaders: {},                        // any default = {}.
    fileNameCachedWithExtension: true,      // boolean default = true, save file with extension.
    fallbackFileNameCachedExtension: '.jpg',// string default '.jpg', extension to save.
    cacheDirectoryType: 'external',         // 'cache' | 'data' | 'external' default = 'external'.
    imageReturnType: 'uri',                 // 'base64' | 'uri' default = 'uri'.
    cacheDirectoryName: 'ion-media-cache',  // string default = 'ion-media-cache'.
    cache_expire: undefined,                // any default undefined, usage { time: new Date().getTime() + (1000 * [unit_second]) }.
    cache: true,                           // boolean defaul = true, activeted cache.
    render: 'src',                          // string default, render to property src.
    spinner: `
    <ion-spinner name="crescent">
    </ion-spinner>`,                        // any usage innertHtml. or false to disabled spinner
    fallbackReload: `
    <ion-icon name="cloud-offline">
    </ion-icon>
    `,                                      // any;usage innertHtml. or false to disable fallbackReload

}
spinnerStyle // string [spinnerStyle]="'width: 100%;height: 100%'"
fallbackStyle // string [fallbackStyle]="'width: 100%;height: 100%'"
```

## IonMediaCache

```javascript
// Print current cache loader in the DOM
// Use console inspect in the browser
IonMediaCache
// print queue process
(window as any).currentlyProcessing
```

## Testing fetch 

```js
fetch('http://cors-anywhere.herokuapp.com/https://lorempixel.com/640/480/?60789', {
   headers: {},
}).then((response) => {
   return response.blob();
}).then((blob) => {
   console.log(blob);
}).catch((e) => console.log(e));
```


[Cors Erros](https://ionicframework.com/docs/troubleshooting/cors)
[Configuring Cors For Laravel Public Storage](https://zaengle.com/blog/configuring-cors-for-laravel-public-storage)

[fix stackoverflow](https://stackoverflow.com/a/21136980/7638125)

```js
customCache = {
    corsFromHeroku: true // this is default false, limited use fix https://stackoverflow.com/a/21136980/7638125
}
```
### CORS Anywhere is a NodeJS proxy which adds CORS headers to the proxied request.

If you expect lots of traffic, please host your own instance of CORS Anywhere, and make sure that the CORS Anywhere server only whitelists your site to prevent others from using your instance of CORS Anywhere as an open proxy.

[Demo Server CORS Anywhere](https://github.com/Rob--W/cors-anywhere#demo-server)