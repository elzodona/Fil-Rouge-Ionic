import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { CommunicationService } from 'src/app/services/communication.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  message: string = 'accueil';

  constructor(private router: Router, private menuCtrl: MenuController, private sidebarService: SidebarService, private communicationService: CommunicationService) { }


  ngOnInit() {
    this.communicationService.currentMessage.subscribe(message => this.message = message);
  }

  
}
