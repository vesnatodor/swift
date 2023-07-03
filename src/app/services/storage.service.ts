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
       mob_email: mob_email
     });
      
   }
}

login(mob_email: string) {
  this.apiService.getUsers().subscribe( (_users: IUser[]) => {
    const user= _users.find(u=>u.mob_email===mob_email);
    if (user){
     localStorage.setItem('name',user.name);
     localStorage.setItem('password',user.pass);
     localStorage.setItem('mob_email',user.mob_email);

     this.loggedUser.next({
       name: 'user.name',
       mob_email: 'user.mob_email',
       pass: 'user.pass'
     });
    }
  
    else
    alert('Wrong username or password!');
    });

  }
  logout() {
    localStorage.clear();
    this.loggedUser.next({name: '', mob_email: '', pass:''});
  }
  
  

    getUserLoggedIn(){
      return this.loggedUser;
    }


}

 


