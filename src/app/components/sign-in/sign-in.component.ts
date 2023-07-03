import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoggIn = false; 
  mob_email= "";
  basketService: any;


  constructor(private storageService: StorageService){

  }
  

  ngOnInit(): void {
    this.storageService.getUserLoggedIn().subscribe(user => {
      if (user.name === '') {
        this.isLoggIn = false;
      } else {
        this.isLoggIn = true;
      }
    });

    


  }
 
  login(){
    this.storageService.login(this.mob_email)
  }
  logout(){
    this.storageService.logout();
  }
  
  

}