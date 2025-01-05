import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-detailes',
  templateUrl: './student-detailes.component.html',
  styleUrls: ['./student-detailes.component.css']
})
export class StudentDetailesComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      fname: new FormControl('', [Validators.required]),
      standrd: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),

    });
  }
  index: number | undefined;

  // onSubmit() {                
  //   console.log('Form Data:', this.form.value);
  // }
  users: any[] = [];

  onSubmit(): void {
    // alert(this.index)
    if(this.form.valid){
      if (this.index !== undefined) {
        this.users[this.index] = this.form.value;
        this.index = undefined;
      } else {
        // alert('hthruptish');
  
        this.users.push(this.form.value);
      } this.form.reset();
    }
 
  }

  data = [
    { id: 1, name: 'John Doe', standerd: 28, Email: '' },
    { id: 2, name: 'Jane Smith', standerd: 34, Email: '' },
    { id: 3, name: 'Alice Johnson', standerd: 45, Email: '' },
    { id: 3, name: 'Alice Johnson', standerd: 45, Email: '' },
  ];

  columns = ['Name', 'father name', 'standerd', 'Email', 'Update'];
  deleteItem(index: number) {
    this.users.splice(index, 1); // Remove the item at the given index
  }

  editFunction(item: any, i: number) {
    this.form.patchValue(item);
    this.index = i;

  }
}

