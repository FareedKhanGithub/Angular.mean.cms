import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user = new User();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void{
  }

  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      this.router.navigate(['/users/view/', response.user._id]);
    }
  }

  onSubmit(): void{
    this.usersService.createUser(this.user).subscribe(
      (response) => {
        this.response(response)
      }
    );
  }
}
