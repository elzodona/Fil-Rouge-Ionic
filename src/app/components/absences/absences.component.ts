import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.scss'],
})
export class AbsencesComponent  implements OnInit {

  sessions: any[] = [];
  id!: number
  test: boolean = false
  absences: any[] = [];


  constructor(private breukh: CoursService) { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.id = JSON.parse(user!).id;

    this.breukh.getSessDone().subscribe((res:any)=>{
      this.sessions = res
      console.log(this.sessions);

    })

    this.breukh.getAbsences(this.id).subscribe((res:any)=>{
      this.absences = res
    })

  }

  separer(chaine: any) {
    const elements = chaine.split(" ");
    return elements[0];
  }

  emarger(id: number)
  {
    // console.log(this.id, id);
    this.breukh.emarger(this.id, id).subscribe((res:any)=>{
      console.log(res.message);
      if (res.message) {
        this.test = true
      }

    })

  }

}
