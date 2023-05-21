import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  str:string = ""
  
  constructor(
    private router: Router){console.log("Alondraaaaaaa")}

  ngOnInit(): void {
    
    // this.test()
  }
  
  test() {
    
    const element = document.getElementById("errorMessage");
    element?.classList.remove("hidden");
    element?.classList.add("block");
  } 
}
