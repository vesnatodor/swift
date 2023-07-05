import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
 
  loggedUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({name: '', email: '', pass:''}); 

  constructor( private apiService: ApiService) {
    const name= localStorage.getItem('name');
    const email= localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (name && email && password){
     this.loggedUser.next({
       name: name, pass: password,
       email: email
     });
      
   }
}

login(email: string) {
  this.apiService.getUsers().subscribe( (_users: IUser[]) => {
    const user= _users.find(u=>u.email===email);
    if (user){
     localStorage.setItem('name',user.name);
     localStorage.setItem('password',user.pass);
     localStorage.setItem('mob_email',user.email);

     this.loggedUser.next({
       name: 'user.name',
       email: 'user.email',
       pass: 'user.pass'
     });
    }
  
    else
    alert('Wrong username!');
    });

  }
  logout() {
    localStorage.clear();
    this.loggedUser.next({name: '', email: '', pass:''});
  }
  
  

    getUserLoggedIn(){
      return this.loggedUser;
    }


}

 


