
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularAPIService } from '../API/angular-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {

  form!: FormGroup;
selectedStudentId: number | null = null;
students:any[]=[];

   constructor (private router: Router,private fb: FormBuilder,private API:AngularAPIService){}

   ngOnInit() {
    this.createForm();

     const data = history.state?.student;
      //console.log(history.state);
  if (data) {
    this.selectedStudentId = data.id;

    this.form.patchValue({
      name: data.name,
      department: data.department,
      rollNumber: data.rollNumber
    });
  }
  }

  createForm() {
    this.form = this.fb.group({
        name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  department: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
rollNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

    getStudents():void{
    //this.isLoading = true;
    this.API.getServiceStudent().subscribe(
         (data) => {
        this.students=data
        //this.isLoading = false;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.selectedStudentId) {
      // 🔥 UPDATE
      this.API.updateStudent(this.selectedStudentId, this.form.value)
        .subscribe(() => {
          alert('Student updated successfully ✅');
          this.getStudents();
          this.router.navigate(['/']);
        });
      }
      else{
        //post
        this.API.postServiceStudent(this.form.value)
      .subscribe((res)=>{
        alert('Student saved successfully ✅');
      });
      this.router.navigate(['/']);
        } 
    }
  }

    home(){
    this.router.navigate(['/']);
   }

}
