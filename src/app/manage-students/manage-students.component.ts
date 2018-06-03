import { Component, OnInit } from '@angular/core';
import { ManageStudentsService } from './manage-students.service';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
  providers:[ManageStudentsService]
})
export class ManageStudentsComponent implements OnInit {

  statusupdatestudent: boolean = true;
  statusaddstudent: boolean = false;
  searchText: string = '';
  arrStudents  = [];
  nameos: string;
  classos: string;
  dobos: string;
  arrClasses = [
    {id: 'D15PM01'},
    {id: 'D15PM02'}
  ];
  constructor(private getJson: ManageStudentsService) {

   }

  AddStudent() {
    if (this.statusaddstudent === true) {
      alert(this.nameos+" - "+this.classos+" - "+this.dobos);
    }
    this.statusaddstudent = !this.statusaddstudent;
    this.nameos = '';
    this.classos = '';
    this.dobos = '';
  }

  CannelAddStudent(){
    this.statusaddstudent = false;
  }
  DeleteStudent(IDStudent: number) {

    alert(IDStudent);

  }

  UpdateStudent(IDStudent: number) {
    this.statusupdatestudent = !this.statusupdatestudent;
  }

  Search(value: string)
  {
    alert("value");
  }
  ngOnInit() {
    this.getJson.getPromise().subscribe(resJson => this.arrStudents = resJson);
  }

}
