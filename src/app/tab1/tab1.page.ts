import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items = [
    { text: 'My first green item', color: '#00ff00' },
    { text: 'My first red item', color: '#ff0000' },
    { text: 'My first blue item', color: '#0000ff' },
  ];

  constructor(private theme: ThemeService, private sanitizer: DomSanitizer) {
  }

  private _darkMode: boolean = false;

  public get darkMode(): boolean {
    return this._darkMode;
  }

  public set darkMode(value: boolean) {
    this._darkMode = value;

    if (this._darkMode)
      this.theme.enableDark();
    else
      this.theme.enableLight();
  }

  public getDynamicColor(color: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`--myvar: ${color}`);
  }
}
