import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IUser } from '../models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  
  getUsers(){
    return  this.http.get<IUser[]>('assets/data/users.json');
  }
}



// import { HttpClient } from '@angular/common/http';
// import { IUser } from '../models/user.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(private http:HttpClient) { }


//   getUsers(){
//     return  this.http.get<IUser[]>('assets/data/users.json');
//   }
// }



