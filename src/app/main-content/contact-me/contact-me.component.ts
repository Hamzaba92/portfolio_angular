import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

checkbox: boolean = false;
errorMsgPrivacy: boolean = false;
isCheckboxChecked: boolean = false;





  

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

  

}
