import { Injectable } from '@angular/core';
import {Task} from '../DTO/taskDto';

@Injectable({
  providedIn: 'root'
})
export class DoingitemService {

  listItem : Task[] = [];
  denemeObj: Task;

  constructor() { }

  sendItemToService(denemeObj1:Task ){
    console.log("here is additemservice : ", denemeObj1);
    this.listItem.push(denemeObj1);
    console.log(this.listItem);
  }
  
}
