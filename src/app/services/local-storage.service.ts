import {APP_ID, Component, Inject, Injectable, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {DeviceDetectorService} from 'ngx-device-detector';
import {CookieService} from 'ngx-cookie-service';
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  prefix:string = this.globals.cookie_prefix;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private deviceService: DeviceDetectorService,
    private cookieService: CookieService,
    private globals: Globals
  ) { }


  checkKeyExist( key ) {
    if (isPlatformBrowser(this.platformId)) {

      key = this.prefix+ key;

      if (this.cookieService.check(key)) {
        return true;
      } else {
        return false;
      }
    }
  }

  setValue( key, value) {
    if (isPlatformBrowser(this.platformId)) {
      key = this.prefix+ key;

      var now = new Date();
      now.setDate(now.getDate()+15);

      this.cookieService.set(key, value, now, '/');
      return true;
    }
  }

  setItem( key, value) {
    if (isPlatformBrowser(this.platformId)) {
      key = this.prefix+ key;

      var now = new Date();
      now.setDate(now.getDate()+15);

      this.cookieService.set(key, value, now, '/');
      return true;
    }
  }

  getItem( key) {
    if (isPlatformBrowser(this.platformId)) {
      key = this.prefix+ key;
      return this.cookieService.get(key);
    }
  }

  removeItem( key) {
    if (isPlatformBrowser(this.platformId)) {
      key = this.prefix+ key;
      this.cookieService.delete(key, '/');
      return true;
    }
  }

  removeAll() {
    let uuid = this.cookieService.get(this.prefix+'uuid');
    let cookie_policy = this.cookieService.get(this.prefix+'cookie_policy');
    if (isPlatformBrowser(this.platformId)) {

      let cookies = this.cookieService.getAll();
      if(cookies) {
        Object.keys(cookies).forEach( ( index ) => {
          if(index.startsWith(this.prefix)) {
            this.cookieService.delete(index, '/');
          }
        })
      }

      var now = new Date();
      now.setDate(now.getDate()+15);
      this.cookieService.set(this.prefix+'uuid', uuid, now, '/');
      this.cookieService.set(this.prefix+'cookie_policy', cookie_policy, now, '/');
      return true;
    }
  }




}
