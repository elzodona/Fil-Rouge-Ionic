import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss'],
})
export class CoursComponent  implements OnInit {

  cours: any[]= [];
  sessions: any;
  display: boolean = true;
  module: any
  prof: any


  constructor(private breukh: CoursService) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    const id = JSON.parse(user!);
    console.log(id.id);

    this.breukh.getCours(id.id).subscribe((res:any)=>{
      this.cours = res
      console.log(this.cours);

    })
  }

  convertirEnHeures(secondes: number): string {
    const heures = Math.floor(secondes / 3600);
    const minutes = Math.floor((secondes % 3600) / 60);
    if (minutes == 0) {
      return `${heures}h`;
    }
    return `${heures}h ${minutes}min`;
  }

  separer(chaine: any) {
    const elements = chaine.split(" ");
    return elements[0];
  }

  getSessions(cour: any)
  {
    this.prof = cour.prof_id.name
    this.module = cour.module_id.libelle
    this.display = false;
    this.breukh.getSess(cour.id).subscribe((res:any)=>{
      this.sessions = res.data
      console.log(this.sessions);

    })
  }

  allCours() {
    this.display = true;
  }

}
