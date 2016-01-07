/// <reference path="./window/window.ts" />

import {Inject, provide} from 'angular2/core';

import {Window} from './window/window';

export class LocalStorage {
    public localStorage:any;

    constructor(@Inject(Window) window:Window) {
        this.localStorage = window.getLocalStorage();
    }

    public set(key:string, value:string):void {
        this.localStorage[key] = value;
    }

    public get(key:string):string {
        return this.localStorage[key] || false;
    }

    public setObject(key:string, value:any):void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObject(key:string):any {
        return JSON.parse(this.localStorage[key] || '{}');
    }

    public remove(key:string):any {
        this.localStorage.removeItem(key);
    }
}

export const LOCAL_STORAGE_PROVIDERS:any[] = [
    provide(LocalStorage, {useClass: LocalStorage, deps: [Window]})
];