import { Component, OnInit } from '@angular/core';
import { ManageStudentsService } from './manage-students.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
  providers: [ManageStudentsService]
})
export class ManageStudentsComponent implements OnInit {

  statusupdatestudent: boolean = true;
  statusaddstudent: boolean = false;
  searchText: string = '';
  arrStudents = [];
  nameos: string;
  classos: string;
  dobos: string;
  arrClasses = [
    { id: 'D15PM01' },
    { id: 'D15PM02' }
  ];
  constructor(private getJson: ManageStudentsService, private http: Http) {

  }

  AddStudent(formAddStudent) {
    if (this.statusaddstudent === true) {
      console.log(formAddStudent.value)
    }
    this.statusaddstudent = !this.statusaddstudent;
    /*const url = '';
    const headers = new Headers({ 'Content-Type': 'application.json' });
    const body = JSON.stringify( formAddStudent.value );
    this.http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
      .then(resJson => console.log(resJson));*/
  }

  CannelAddStudent() {
    this.statusaddstudent = false;
  }
  DeleteStudent(IDStudent: number) {

    alert(IDStudent);

  }

  UpdateStudent(ids: string, names: string, classs: string,dobs: string ) {
      this.statusupdatestudent = !this.statusupdatestudent;
      alert(ids+names+classs+dobs);
  }

  CannelUpdateStudent()
  {
    this.statusupdatestudent = true;
  }
  Search(value: string) {
    alert("value");
  }
  ngOnInit() {
    this.getJson.getData().subscribe(resJson => this.arrStudents = resJson);
  }

}
