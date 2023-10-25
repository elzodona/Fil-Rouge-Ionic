import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CoursService {

  constructor(private breukh: HttpClient) { }

  getCours(id: number)
  {
    return this.breukh.get(`http://127.0.0.1:8000/api/eleve/${id}/cours`);
  }

  getSess(id: number) {
    return this.breukh.get(`http://127.0.0.1:8000/api/cours/${id}/sessions`);
  }

  getSessDone() {
    const user = localStorage.getItem('user');
    const id = JSON.parse(user!);
    // console.log(id.id);
    return this.breukh.get(`http://127.0.0.1:8000/api/eleve/${id.id}/sessionDone`);
  }

  emarger(eleve_id: number, session_cour_id: number) {
    return this.breukh.post('http://127.0.0.1:8000/api/absence', { eleve_id, session_cour_id });
  }

  getAbsences(id: number)
  {
    return this.breukh.get(`http://127.0.0.1:8000/api/eleve/${id}/absences`);
  }


}

