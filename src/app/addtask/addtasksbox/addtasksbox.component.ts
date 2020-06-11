import { Component, OnInit, Input} from '@angular/core';
import {AdditemService} from '../../services/additem.service';
import {Task} from '../../DTO/taskDto';

@Component({
  selector: 'app-addtasksbox',
  templateUrl: './addtasksbox.component.html',
  styleUrls: ['./addtasksbox.component.css']
})
export class AddtasksboxComponent implements OnInit {

  @Input() item : Task;
  
  constructor(public additemService:AdditemService) {}

  ngOnInit(): void {
  }

}
