import { Component } from '@angular/core';
import {
  Validators,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

interface User {
  id: string;
  name: string;
  lastname: string;
  type: string;
  email: string;
  password: string;
  confirmPassword: string;
  subjects: string[];
  description: string;
  sex: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[] = [];
  usersForm = new FormGroup({
    users: new FormArray([this.getUserFields()]),
  });

  generateUniqueId(): string {
    return 'id-' + new Date().getTime();
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value === confirmPassword?.value) {
      confirmPassword?.setErrors(null);
      return null;
    } else {
      confirmPassword?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  getUserFields() {
    return new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        lastname: new FormControl('', [Validators.required]),
        type: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/
          ),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/
          ),
        ]),
        subjects: new FormGroup({
          subjectsArray: new FormArray([]),
        }),
        description: new FormControl(''),
        sex: new FormControl(''),
        phone: new FormControl('', Validators.pattern(/^\+380\d{9}$/)),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  getSubjectFields() {
    return new FormGroup({
      subject: new FormControl(''),
    });
  }

  getUsers() {
    return this.usersForm.get('users') as FormArray;
  }

  addUser() {
    this.getUsers().push(this.getUserFields());
  }

  deleteUser(index: number) {
    this.getUsers().removeAt(index);
  }

  getUserSubjects(userIndex: number) {
    return this.getUsers().at(userIndex).get('subjects') as FormGroup;
  }

  getSubjectArray(userIndex: number) {
    return this.getUserSubjects(userIndex).get('subjectsArray') as FormArray;
  }

  addSubject(index: number) {
    const subjectsArray = this.getSubjectArray(index);
    console.log('tut', subjectsArray);

    subjectsArray.push(this.getSubjectFields());
  }

  deleteSubject(userIndex: number, subjectIndex: number) {
    this.getSubjectArray(userIndex).removeAt(subjectIndex);
  }
  onSubmit() {
    this.usersForm.value.users?.forEach((user, index) => {
      const existingUser = this.users.find((u) => u.id === user.id);
      if (!existingUser) {
        if (!user.id) {
          user.id = this.generateUniqueId();
        }
        const userFormGroup = this.getUsers().at(index) as FormGroup;
        userFormGroup.patchValue(user);
        this.users.push(user as User);
      }
    });

    console.log('users', this.users);
  }
}
