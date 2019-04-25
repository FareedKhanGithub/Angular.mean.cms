import { Component, OnInit } from '@angular/core';

//Import the UserService
import { UsersService } from '../users.service';

// Import the User Object/Schema
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: User
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  
  //create a local wrapper for
  getUsers(): void{
    this.usersService.getUsers().subscribe(
      (response : any) => {
        this.users = response.users;
        //console.log(this.users);
      }
    );
  }
}
