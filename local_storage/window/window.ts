import {provide} from 'angular2/core';

export class Window {
  public getLocalStorage():any {
    return window.localStorage;
  }
}

export const WINDOW_PROVIDERS:any[] = [
  provide(Window, {useClass: Window})
];