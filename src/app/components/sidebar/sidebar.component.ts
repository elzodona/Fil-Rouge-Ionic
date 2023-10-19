import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  constructor(private router: Router, private menuCtrl: MenuController, private sidebarService: SidebarService) { }


  get isVisible() {
    return this.sidebarService.sidebarVisible;
  }

  navigateTo(page: string) {
    console.log('hey');
    
    this.router.navigateByUrl(page);
    // this.menuCtrl.toggle();
  }

  deconnexion() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
