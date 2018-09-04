import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: any;
  email: String;
  password: String;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

   showPassword() {
    var x = (<HTMLInputElement>document.getElementById("password"));
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

   onSubmit() {
     const user = {
       email : this.email,
       password : this.password
      };

    this.authService.loginUser(user).subscribe( data => {
      if (data == 'Success') {
        alert('Success');
      }
      else {
        alert('Failed');
      }



    });
}




}
