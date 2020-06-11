import { Component, OnInit, Input} from '@angular/core';
import {AdditemService} from '../services/additem.service';
import {Task} from '../DTO/taskDto';

@Component({
  selector: 'app-taskbox',
  templateUrl: './taskbox.component.html',
  styleUrls: ['./taskbox.component.css']
})
export class TaskboxComponent implements OnInit {

  @Input() item : Task;

  constructor(public additemService:AdditemService) {}

  ngOnInit(): void {}

}
