import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Task} from '../DTO/taskDto';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {AdditemService} from '../services/additem.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

  contactForm: FormGroup;
  categories = ['BAR', 'STOK', 'MEDICAL', 'ARGE'];

  constructor(private route: ActivatedRoute, private additemService:AdditemService, private formBuilder: FormBuilder) {
    this.contactForm = this.updateFormGroup(formBuilder);
  }

  updateFormGroup(formBuilder: FormBuilder){
    return formBuilder.group({
      person: formBuilder.group(this.additemService.listItem.find(this.findObject))
    });
  }

  findObject() { 
    return ; // update edeceğim itemin id si lazım
  }

  ngOnInit(): void {}

  onSubmit(){
    const result: Task = Object.assign({}, this.contactForm.value.person);
    result.updatedate = new Date().toLocaleString('tr-TR', { timeZone: 'UTC' });
    this.additemService.sendItemToService(result);
  }

  update(){}

}
