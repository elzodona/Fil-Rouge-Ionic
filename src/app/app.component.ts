import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from './services/communication.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(private menuCtrl: MenuController, private router: Router, private communicationService: CommunicationService) { }
  
  currentPage: string = 'accueil';

  goToAccueil(page: string) {
    this.communicationService.changeMessage(page);
    // this.menuCtrl.close();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
