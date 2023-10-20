import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  page: string = "accueil";

  constructor(private serviceCom: CommunicationService) { }

  ngOnInit() {
    this.serviceCom.currentMessage.subscribe(message => this.page = message)
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}