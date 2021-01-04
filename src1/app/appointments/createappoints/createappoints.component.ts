import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-createappoints',
  templateUrl: './createappoints.component.html',
  styleUrls: ['./createappoints.component.css']
})
export class CreateappointsComponent implements OnInit {

  title='create appointment'
  appointment=['patientname', 'dob', 'clinicdate', 'clinictime', 'mrnnhsn', 'type', 'cliniccode', 'pcseenby', 'no', 'ref', 'visit', 'fu', 'hrg', 'letter']

  submitted=false;
  onSubmit(){
    this.submitted=true;
  }

  getCurrentModel(){
    return JSON.stringify(this.appt);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
