import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  user!: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  addUser() {
    this.userService.createUser(this.user).then(() => {
      alert('usuario creado con exito!');
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe((response) => {
      if (response) {
        alert(`Hola! ${response.name}`);
      }
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).then(() => {
      alert('usuario creado con exito!');
    });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).then(() => {
      alert('usuario borrado con exito!');
    });
  }
}
