import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from "../app/user-service.service"
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServiceService]
})
export class AppComponent {
  submitted = false;
  user: any;
  uid: any;
  registerForm: FormGroup;
  updateForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private user_service: UserServiceService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
    // this.get_user();
  }
  get f() {
    return this.registerForm.controls
  }
  mySubmit() {
    alert(this.registerForm.controls.FullName.value)
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    var data = (this.registerForm.value);
    this.user_service.user_reg(data).subscribe(dt => {
      if (dt['success'] = true) {
        alert(dt['message'])
        // this.get_user();
      }
      else {
        alert(dt['message'])
      }
    })
  }

  // funUpdate(users) {
  //   this.registerForm = this.formBuilder.group({
  //     FullName: [users.FullName],
  //     Email: [users.Email]
  //   })
  //   this.uid = users.u_id
  // }

  // funSave() {
  //   var olddata = { u_id: this.uid }
  //   var newdata = (this.registerForm.value)
  //   var newarr = [olddata, newdata]
  //   this.user_service.update_user(newarr).subscribe(dt => {
  //     alert(dt['message'])
  //     this.get_user();
  //   })
  // }
  // funLog() {
  //   this.user_service.google_log().subscribe(dt => {
  //     console.log('Logged In')
  //   })
  // }
  // funDel(id) {
  //   this.user_service.del_user({ id: id }).subscribe(dt => {
  //     alert(dt['message'])
  //     this.get_user();
  //   })
  // }

  // get_user() {
  //   this.user_service.get_user().subscribe(dt => {
  //     this.user = dt['result']
  //   })
  // }
}
