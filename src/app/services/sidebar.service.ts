import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  sidebarVisible = false;

  showSidebar() {
    this.sidebarVisible = true;
  }

  hideSidebar() {
    this.sidebarVisible = false;
  }

  
}
