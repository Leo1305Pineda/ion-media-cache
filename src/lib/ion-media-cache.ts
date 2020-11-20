
export class CurrentBlob {
    url: string;
    blob: Blob;
    objectUrl: string;
    constructor(o: any = {}) {
        this.url = o.url;
        this.blob = o.blob;
        this.objectUrl = o.objectUrl;
    }
}

export class CustomCache {
    debugMode: boolean;
    enabled: boolean;
    corsFromHeroku: boolean;
    fallbackUrl: string;
    isFallback: boolean;
    concurrency: number;
    maxCacheSize: number;
    maxCacheAge: number;
    httpHeaders: any;
    fileNameCachedWithExtension: boolean;
    fallbackFileNameCachedExtension: string;
    cacheDirectoryType: 'cache' | 'data' | 'external' = 'external';
    imageReturnType: 'base64' | 'uri' = 'uri';
    cacheDirectoryName: string;
    isLoad: boolean;
    cache_expire: any;
    cache = true;
    src: string;
    render: string;
    spinner: any;
    spinnerStyle: string;
    fallbackReload: any;
    fallbackStyle: string;
    /** dynamic variable */
    currentBlob: CurrentBlob;

    constructor(o: any = {}) {
        /** display console debug */
        this.debugMode = !!o.debugMode;
        /** enable cache */
        this.enabled = o.enabled || true;
        /** concat http://cors-anywhere.herokuapp.com/ to currentUrl */
        this.corsFromHeroku = !!o.corsFromHeroku;
        /** Url if fail */
        this.fallbackUrl = o.fallbackUrl;
        /** Number of concurrent requests allowed */
        this.concurrency = o.concurrency || 5;
        /** Max chache size on MB */
        this.maxCacheSize = o.maxCacheSize || -1;
        this.maxCacheAge = o.maxCacheAge || -1;
        /** usage fetch view  */
        this.httpHeaders = o.httpHeaders || {};
        /** Must be default 'true' for the new WebView to show images */
        this.fileNameCachedWithExtension = o.fileNameCachedWithExtension || true;
        this.fallbackFileNameCachedExtension = o.fallbackFileNameCachedExtension || '.jpg';
        this.cacheDirectoryType = o.cacheDirectoryType || 'external';
        this.imageReturnType = o.imageReturnType || 'uri';
        /** Name directory cache */
        this.cacheDirectoryName = 'ion-media-cache';
        /** Indicates if the image is still loading */
        this.isLoad = o.isLoad || true;
        this.cache_expire = o.cache_expire;
        this.src = o.src;
        this.render = o.render || 'src';
        const divStyle = `display: none;position: absolute;width: 100%;height: 100%;text-align: center;z-index: 999;justify-content: center;align-items: center;align-content: center;background: #dcdcdc4f;right: auto;top: 0px;left: 0;`;
        const centerStyle = 'margin: 0;position: absolute;top: 50%;transform: translateX(-50%) translateY(-50%);';
        this.spinner = typeof o.spinner === 'boolean' && !o.spinner ? false : `<ion-spinner name="crescent" color="colorbase" style="${centerStyle}"></ion-spinner>`;
        this.spinnerStyle = o.styleSpinner || `${divStyle}`;
        this.fallbackReload = typeof o.fallbackReload === 'boolean' && !o.fallbackReload ? false : `<ion-icon name="cloud-offline" color="colorbase" style="${centerStyle}font-size: 2.7em;"></ion-icon>`;
        this.fallbackStyle = o.fallbackStyle || `${divStyle}`;
    }
}
