import { Component, Input } from '@angular/core';
import { FormGroup,FormControl,Validator } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form:FormGroup;
  // @Input() data : any;
  // @Input() testing! :boolean;
  @Input() child!: number;

  constructor(){
    this.form = new FormGroup({

    })
  }
  ngOnInit(){
    // alert(this.form)
    alert(this.child)
  }
  // ngOnInit(){
  //   alert(this.data)
  // }
  user:any[]=[];
  onSubmit():void{
    if(this.form.valid){
      this.user.push(this.form.value)
    }

  }
  columns = ["name","fname"];
 
  
}
