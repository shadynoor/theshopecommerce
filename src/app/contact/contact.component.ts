import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contactForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    subject: new FormControl('',Validators.required),
    msg: new FormControl('',Validators.required),
  })


  ngOnInit(): void {
  }

  submit(){
    console.log(this.contactForm.controls.name.value);
  }

}
