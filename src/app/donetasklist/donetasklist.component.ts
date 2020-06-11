import { Component, OnInit } from '@angular/core';
import {DoneitemService} from '../services/doneitem.service';

@Component({
  selector: 'app-donetasklist',
  templateUrl: './donetasklist.component.html',
  styleUrls: ['./donetasklist.component.css']
})
export class DonetasklistComponent implements OnInit {

  constructor(public doneitemService:DoneitemService) { }

  ngOnInit(): void {
  }

}
