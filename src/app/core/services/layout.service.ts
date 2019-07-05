import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  changePrimaryColor(color: string): void {
    this.document.documentElement.style.setProperty('--theme-primary', color);
  }
  changeSecondaryColor(color: string): void {
    this.document.documentElement.style.setProperty('--theme-secondary', color);
  }
  changeIconSize(size: string): void {
    this.document.documentElement.style.setProperty('--icon-size', size);
  }
}
