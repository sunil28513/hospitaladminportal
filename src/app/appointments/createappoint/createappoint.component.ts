import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createappoint',
  templateUrl: './createappoint.component.html',
  styleUrls: ['./createappoint.component.css']
})
export class CreateappointComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data:any) {
    alert("Entered Email id : " + data.emailid);
 }

}
