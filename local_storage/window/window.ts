import {Injectable, provide} from 'angular2/core';
import {Type} from "angular2/src/facade/lang";

@Injectable();
export class Window {
  public getLocalStorage():any {
    return window.localStorage;
  }
}

export const WINDOW_PROVIDERS:any[] = [
  provide(Window, {useClass: Window})
];

export function WindowSuscriber(appPromise:Promise<ComponentRef>) {
  appPromise.then((app) => {
    app.injector.resolveAndInstantiate(<Type>Window);
  });
}
