import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  employeeForm: FormGroup;

  constructor() { }

  onSubmit() {
    console.log(this.employeeForm.value);

  }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // Create skills form group
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }


}
