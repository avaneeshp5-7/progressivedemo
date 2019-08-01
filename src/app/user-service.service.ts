import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { URL } from './api'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http_url: HttpClient) { }
  user_reg(data) {
    console.log("server side", data)
    return this.http_url.post(URL.post_register, data)
  }
  google_log() {
    return this.http_url.get(URL.get_login)
  }

  get_user() {
    return this.http_url.get(URL.get_profile)
  }
  del_user(id) {
    return this.http_url.post(URL.post_delete, id)
  }
  update_user(dt) {
    return this.http_url.post(URL.update_profile, dt)
  }
}
