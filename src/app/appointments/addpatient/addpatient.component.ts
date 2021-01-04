import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {


    constructor(private route: ActivatedRoute) {
      debugger;
      this.route.params.subscribe(params => console.log(params)); // Object {}
        }

  ngOnInit(): void {
    debugger;
  }

}
