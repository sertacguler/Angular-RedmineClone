import { Component, OnInit} from '@angular/core';
import {AdditemService} from '../../services/additem.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(public additemService:AdditemService) { }

  ngOnInit(): void {}

}
