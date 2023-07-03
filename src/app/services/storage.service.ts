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
    const name= localStorage.getItem('name');
    const mob_email= localStorage.getItem('mob_email');
    const password = localStorage.getItem('password');
    if (name && mob_email && password){
     this.loggedUser.next({
       name: name, pass: password,
       mob_email: undefined
     });
      
   }
}



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