import { Component, OnInit } from '@angular/core';
import { IpService } from '../manage-students/manage-students.service';
@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {



  arrStudents = [
    {id: 1, name: 'Nguyễn Văn Cường',sex: true, email: 'nguyenvancuong@gmail.com', address: 'Số 220, tổ 110, quận 1, tpHCM'},
    {id: 2, name: 'Phạm Thị Hoa',sex: false, email: 'phamthihoa@gmail.com', address: 'Số 232, tổ 120, quận 10, tpHCM'},
    {id: 3, name: 'Võ Văn Hộ',sex: true, email: 'vovanho@gmail.com', address: 'Số 260, tổ 234, quận 1, tpHCM'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
