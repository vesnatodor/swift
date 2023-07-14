import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name="";
  numbera = 0;
  isLoggIn=false;

  constructor(private storageService: StorageService){
  }

  ngOnInit(): void {


    this.storageService.getUserLoggedIn().subscribe(user=> {
      if(user.name === '') {

        this.isLoggIn = false;
      } else{

        this.isLoggIn =true;
      }
    }
      
      
      
      );
//   this.storageService.getUserLoggedIn().subscribe(user => {
//     if (user.user === '') {
//       this.isLoggIn = false;
//     } else {
//       this.isLoggIn = true;
//     }
//   });
// }
}
}
