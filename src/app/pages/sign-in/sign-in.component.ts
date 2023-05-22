import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  str:string = ""
  isSubmitted:boolean = false

  // Form Group
  credentialsForm = this.fb.group({
    
    email: ['', [Validators.required, Validators.email]],

    password: ['', Validators.required]
  })
  
  constructor(
    private router: Router,
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    
    // this.test()
  }
  
  // Error Message Trigger
  test() {
    
    const element = document.getElementById("errorMessage");
    element?.classList.remove("hidden");
    element?.classList.add("block");
  }

  onSubmit() {

    console.log('Credentals: ', this.credentialsForm.value, this.credentialsForm.invalid)

    this.isSubmitted = true
  }

  // Method to validate if Email was typed correctly
  validate(input:string):boolean {

    return (
      (this.credentialsForm.get(input)?.invalid && 
      (this.credentialsForm.get(input)?.dirty || this.credentialsForm.get(input)?.touched || this.isSubmitted) && 
      this.isSubmitted) ? true : false
    )
  }

}
