import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hide: boolean = true;
  loginForm!: FormGroup;
  passwordCtrl!: FormControl;
  userNameCtrl!: FormControl;
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private formBuilder: FormBuilder) {
    iconRegistry
      .addSvgIcon(
        "login",
        sanitizer
          .bypassSecurityTrustResourceUrl("assets/medias/icons/duotune/technology/teh004.svg")
      );
    iconRegistry
      .addSvgIcon(
        "pwd",
        sanitizer
          .bypassSecurityTrustResourceUrl("assets/medias/icons/duotune/general/gen047.svg")
      );
    iconRegistry
      .addSvgIcon(
        "eye-close",
        sanitizer
          .bypassSecurityTrustResourceUrl("assets/medias/icons/svg/eye-close.svg")
      );
    iconRegistry
      .addSvgIcon(
        "eye-open",
        sanitizer
          .bypassSecurityTrustResourceUrl("assets/medias/icons/svg/eye-open.svg")
      );
  }

  ngOnInit(): void {
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(8)]);
    this.userNameCtrl = this.formBuilder.control('', [Validators.required]);
    this.loginForm = this.formBuilder.group({
      userNameCtrl: this.userNameCtrl,
      password: this.passwordCtrl,
    });
  }

  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'This field is required !';
    } else if (ctrl.hasError('minlength')) {
      return 'This field requires at least 8 characters';
    } else if (ctrl.hasError('maxlength')) {
      return 'Ce numéro de téléphone contient trop de chiffres';
    } else {
      return 'Ce champ contient une erreur';
    }
  }

  submitLogin() {
  }
}
