import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasklistComponent } from './addtask/tasklist/tasklist.component';
import { DoingtasklistComponent } from './doingtasklist/doingtasklist.component';
import { DonetasklistComponent } from './donetasklist/donetasklist.component';
import { AddtaskitemComponent } from './addtask/addtaskitem/addtaskitem.component';
import { TaskboxComponent } from './taskbox/taskbox.component';
import { AttachtaskComponent } from './addtask/attachtask/attachtask.component';
import { TasksComponent } from './tasks/tasks.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddtasksboxComponent } from './addtask/addtasksbox/addtasksbox.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';

const routes: Routes = [
    { path: 'addtask', component: AttachtaskComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'update', component: UpdatetaskComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    DoingtasklistComponent,
    DonetasklistComponent,
    AddtaskitemComponent,
    TaskboxComponent,
    AttachtaskComponent,
    TasksComponent,
    AddtasksboxComponent,
    UpdatetaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
