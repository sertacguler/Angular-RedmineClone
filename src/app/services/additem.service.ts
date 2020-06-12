import { Injectable } from '@angular/core';
import {Task} from '../DTO/taskDto';

@Injectable({
  providedIn: 'root'
})
export class AdditemService {

  listItem : Task[] = [{  id:1, title: "Diş Polikinliği Randevu getirme sorunu", detail: "Randevu ara butonu çalışmamaktadır.", enddate: "03/07/2020", state: "Acil", alterations: "", category: "Dis",createdate:"01/07/2020", createuser:"Sertaç Güler", updatedate:"", updateuser:"", addjpg:"", addtxt:""},];
  denemeObj: Task;

  constructor() {}
  
  sendItemToService(denemeObj1:Task ){
    console.log("here is additemservice : ", denemeObj1);
    this.listItem.push(denemeObj1);
    console.log(this.listItem);
  }
  
  /*deleteItem(_item:string){
    this.listItem = this.listItem.filter(item => item !== _item)
  }*/

  deleteItem(_item:number){
    this.listItem = this.listItem.filter(item => item.id !== _item)
  }
  
}
  