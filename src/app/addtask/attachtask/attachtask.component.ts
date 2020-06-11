import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attachtask',
  templateUrl: './attachtask.component.html',
  styleUrls: ['./attachtask.component.css']
})
export class AttachtaskComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
