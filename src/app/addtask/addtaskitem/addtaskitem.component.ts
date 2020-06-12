import {Component, OnInit, Input} from '@angular/core';
import {AdditemService} from '../../services/additem.service';
import {Task} from '../../DTO/taskDto';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-addtaskitem',
  templateUrl: './addtaskitem.component.html',
  styleUrls: ['./addtaskitem.component.css']
})
export class AddtaskitemComponent implements OnInit{

  contactForm: FormGroup;
  id:number;
  categories = ['BAR', 'STOK', 'MEDICAL', 'ARGE'];

  constructor(private additemService:AdditemService,private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup(formBuilder);
  }
  
  ngOnInit() {}

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      person: formBuilder.group(new Task())
    });
  }

  onSubmit(){
    const result: Task = Object.assign({}, this.contactForm.value.person);
    result.createdate = new Date().toLocaleString('tr-TR', { timeZone: 'UTC' });
    result.id = Math.random();
    this.additemService.sendItemToService(result);
  }

  addperson(){}

  }
  