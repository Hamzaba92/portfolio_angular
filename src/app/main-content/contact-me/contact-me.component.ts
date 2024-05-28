import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../language.service';
import { MySkillsComponent } from '../my-skills/my-skills.component';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, MySkillsComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
languageService = inject(LanguageService);

contactData = {
  name: "",
  email: "",
  message: ""
}

checkbox: boolean = false;
errorMsgPrivacy: boolean = false;
isCheckboxChecked: boolean = false;

borderGreenName: boolean = false;
borderRedName: boolean = false;

borderGreenMail: boolean = false;
borderRedMail: boolean = false;

borderGreenMessage: boolean = false;
borderRedMessage: boolean = false;

successImgName: boolean = true;
errorImgName: boolean = true;

successImgEmail: boolean = true;
errorImgEmail: boolean = true;

successImgMessage: boolean = true;
errorImgMessage: boolean = true;







isNameValid: boolean = false;
isEmailValid: boolean = false;
isMessageValid: boolean = false;


onSubmit(ngForm: NgForm){

}


  acceptCheckbox(){
    if(this.checkbox){
      this.checkbox = false
    }
    else{
      this.checkbox = true
    }
    this.isCheckboxChecked = !this.isCheckboxChecked;
  }


    sendForm(){
      if (this.checkbox) {
        this.errorMsgPrivacy = true;
      } else {
        this.errorMsgPrivacy = false;
      }
    }


    showHint(field: string) {
      if (field === 'name') {
        this.validateName();
      } else if (field === 'email'){
          this.validateEmail();
        } else if(field === 'message'){
          this.validateMessage();
        }
       
      
    }

    validateName() {
      const namePattern = /^[a-zA-Z]{3,}(?: [a-zA-Z]{2,})?$/;
      this.isNameValid = namePattern.test(this.contactData.name);
      this.updateStyles();
    }

    validateEmail(){
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.isEmailValid = emailPattern.test(this.contactData.email);
      this.updateStyles();
    }

    validateMessage(){
      const messagePattern = /^.{4,}$/;
      this.isMessageValid = messagePattern.test(this.contactData.message);
      this.updateStyles();
    }

    updateStyles() {
      //Name
      this.borderGreenName = this.isNameValid;
      this.borderRedName = !this.isNameValid && this.contactData.name.length > 0;
      this.errorImgName = !this.isNameValid && this.contactData.name.length > 0;
      this.successImgName = this.isNameValid;

      //Email
      this.borderGreenMail = this.isEmailValid;
      this.borderRedMail = !this.isEmailValid && this.contactData.email.length > 0;
      this.errorImgEmail = !this.isEmailValid && this.contactData.email.length > 0;
      this.successImgEmail = this.isEmailValid;

      //Message
      this.borderGreenMessage = this.isMessageValid;
      this.borderRedMessage = !this.isMessageValid && this.contactData.message.length > 0;
      this.errorImgMessage = !this.isMessageValid && this.contactData.message.length > 0;
      this.successImgMessage = this.isMessageValid;

    }
  

}
