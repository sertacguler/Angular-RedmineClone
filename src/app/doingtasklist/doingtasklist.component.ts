import { Component, OnInit } from '@angular/core';
import {DoingitemService} from '../services/doingitem.service';

@Component({
  selector: 'app-doingtasklist',
  templateUrl: './doingtasklist.component.html',
  styleUrls: ['./doingtasklist.component.css']
})
export class DoingtasklistComponent implements OnInit {

  constructor(public doingitemService:DoingitemService) { }

  ngOnInit(): void {
  }

}
