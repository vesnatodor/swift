import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  loggedUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({name: '', mob_email: '', pass:''}); 

  constructor( private apiService: ApiService) {
    
   }
}


// constructor( private apiService: ApiService) {
//   const username = localStorage.getItem('username');
//    const password = localStorage.getItem('password');
//   if (username && password){
//    this.loggedUser.next({user: username, pass: password});

//  }
// }
// login(username: string, password:string) {
//   this.apiService.getUsers().subscribe( (_users: IUser[]) => {
//     const user= _users.find(u=>u.user===username && u.pass===password)
//     if (user){
//      localStorage.setItem('username',user.user);
//      localStorage.setItem('password',user.pass);

//      this.loggedUser.next({user: user.user, pass: user.pass});
//     }
  
//     else
//     alert('Wrong username or password!');
     
//     });
    
//   };