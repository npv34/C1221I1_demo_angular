import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  isHideImage = false;
  users: IUser[] = [
    {
      name: 'Thanh',
      email: 'thanh@gmail.com',
      address: 'Ha noi',
      phone: 9129328229,
      avatar: 'https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
    },
    {
      name: 'Hung',
      email: 'hung@gmail.com',
      address: 'Ha noi',
      phone: 9129328229,
      avatar: 'https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png'
    },
    {
      name: 'Quang',
      email: 'quang@gmail.com',
      address: 'Ha noi',
      phone: 9129328229,
      avatar: 'https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  showImage(): void {
    this.isHideImage = !this.isHideImage;
  }

  delete(index: number): void {
    if (confirm('Are you sure?')) {
      // thuc hien xoa

    }
  }

  search(event: any) {
    let keyword = event.target.value;
  }

}
