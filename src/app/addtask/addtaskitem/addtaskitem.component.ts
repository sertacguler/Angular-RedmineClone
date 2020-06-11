import { Component, OnInit, Input} from '@angular/core';
import {AdditemService} from '../../services/additem.service';
import {Task} from '../../DTO/taskDto';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addtaskitem',
  templateUrl: './addtaskitem.component.html',
  styleUrls: ['./addtaskitem.component.css']
})
export class AddtaskitemComponent implements OnInit{

  disableButton:boolean = false;
  id:number;
  @Input() todoitem:string = "";
  denemeObj = {} as Task;

  categories = ['ANKARA', 'ISTANBUL', 'IZMIR', 'ADANA'];
  profileForm = new FormGroup({
    title : new FormControl(''),
    detail : new FormControl(''),
    enddate : new FormControl(''),
    state : new FormControl(''),
    alterations : new FormControl(''),
    category : new FormControl(''),
  });

  constructor(private additemService:AdditemService) {}
  
  ngOnInit() {}
  
  onSubmit(){
    this.denemeObj = this.profileForm.value;
    this.denemeObj.createdate = new Date().toLocaleString('tr-TR', { timeZone: 'UTC' });
    this.denemeObj.id = Math.random();
    this.additemService.sendItemToService(this.denemeObj);
  }

/*
  changes(event:string){
    this.todoitem = event;
    this.doDisableButton();
    this.denemeObj.title = event;
    console.log(this.denemeObj);
  }
  
  addItem(){
    this.additemService.sendItemToService(this.todoitem);
    this.todoitem = "";
    this.doDisableButton();
  }*/
  
  doDisableButton(){
    this.disableButton = this.todoitem.trim() === "" ? true : false;
  }
  
  addperson(){}

  }
  