
import { Component } from '@angular/core';
import { CommunicationService } from './services/communication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activeItem: string = '';

  public appPages = [
    { title: 'accueil', url: '/eleve/accueil', icon: 'home' },
    { title: 'cours', url: '/eleve/cours', icon: 'school' },
    { title: 'absences', url: '/eleve/absences', icon: 'calendar' },
  ];

  constructor(private serviceCom: CommunicationService, private router: Router) { }

  getPage(page: any) {
    this.serviceCom.changeMessage(page)
    this.activeItem = page;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }


}

