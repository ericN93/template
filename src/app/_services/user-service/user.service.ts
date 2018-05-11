import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';

@Injectable()
export class UserService {

  private validUser = <Object>  {
    "email": "eric@test.se",
    "password": "123"
  };

  constructor(private storageService: StorageService) { }

  public setUser(email, password) {
    if(email === this.validUser['email'] && password === this.validUser['password']) {
      console.log("LOGIN!")
      this.storageService.stor("email", email)
      this.storageService.stor("loggedIn", true)
    } else {
      console.log("invalid credentials")
    }
  }

  public getUserLoggedIn () {
    return this.storageService.retrieve('loggedIn') === '' ? false : true;
  }


  public getEmail () {
    return this.storageService.retrieve('email');
  }

  public setUserLoggedOut () {
    this.storageService.clearAll();
  }

}
