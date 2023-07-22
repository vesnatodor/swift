import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  firstName = '';
  lastName = '';
  city = '';
  address = '';
  phoneNumber = '';

  submitOrder() {
    this.firstName = '';
    this.lastName = '';
    this.city = '';
    this.address = '';
    this.phoneNumber = '';
    alert("Sent successfully!");
  }






}
