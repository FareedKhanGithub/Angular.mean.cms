import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user';



@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id): void {
    this.usersService.getUser(id).subscribe(
      (response: any) => {
        this.user = response.user
      }
    );
  }

  deleteUser(id: string): void {
    if(confirm("Are you sure to delete " + this.user.username)) {
      this.usersService.deleteUser(id).subscribe(
        ()=>{this.router.navigate(['/users'])}
      );
    }
  }
  
}
