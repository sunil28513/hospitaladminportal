import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caadmin',
  templateUrl: './caadmin.component.html',
  styleUrls: ['./caadmin.component.css']
})
export class CaadminComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    debugger;
    this.route.params.subscribe(params => console.log(params)); // Object {}
      }

  ngOnInit(): void {
    debugger;
  }

}
