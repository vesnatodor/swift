import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  loggedUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({name: '', mob_email: '', pass:''}); 

  constructor( private apiService: ApiService) { }
}
