import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  details:FormGroup;
  constructor(){
    this.details = new FormGroup({
      name: new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      class: new FormControl('',[Validators.required]),
      Div: new FormControl('',[Validators.required]),
      Gender: new FormControl('',[Validators.required]),
      Caste: new FormControl('',[Validators.required]),
      Religion: new FormControl('',[Validators.required]),
      Nationality: new FormControl('',[Validators.required]),
      addresses: new FormControl('',[Validators.required]),


    })
  }
   index : number|undefined;
  student:any[]=[];
  onSubmit():void{
    debugger;
    if(this.details.valid){
    if(this.index!==undefined){
      this.student[this.index]=this.details.value
      this.index=undefined;
    }
    else{
      this.student.push(this.details.value)
      this.details.reset();
    }
    }
  }

  
  columns = ['name','phone','class','Div','Gender','Caste','Religion','Nationality','addresses','Update'];
  deleteItem(index:number){
this.student.splice(index, 1);
  }
  editFunction(item: any, i: number) {
    this.details.patchValue(item);
    this.index = i;

  }
  ngOnChanges(){
    console.log('kjhdkjsdlf');
  }
  }

