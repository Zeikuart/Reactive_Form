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

  // Form Group
  credentialsForm = this.fb.group({
    
    emailInput: ['', Validators.required],

    passwordInput: ['']
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
    // TODO: Use EventEmitter with form value
    console.log('Credentals: ', this.credentialsForm.value);
  }
}
