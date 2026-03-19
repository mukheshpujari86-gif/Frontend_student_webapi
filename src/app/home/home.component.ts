import { Component, OnInit } from '@angular/core';
import { AngularAPIService } from '../API/angular-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor (private router: Router,private API:AngularAPIService){}

    students:any[]=[];
    isLoading = true;

   ngOnInit(): void {
     this.getStudents();
   }

   about(){
    this.router.navigate(['/about']);
   }

   getStudents():void{
    this.isLoading = true;
    this.API.getServiceStudent().subscribe(
         (data) => {
        this.students=data
        this.isLoading = false;
    });

//     getStudents(): void {
//   this.isLoading = true;

//   this.API.getServiceStudent().subscribe((data) => {

//     if (data && data.length > 0) {
//       this.students = data;
//     } else {
//       this.students = [];
//       console.log('No data found');
//     }

//     this.isLoading = false;

//   }, (error) => {

//     console.error('Error occurred:', error);
//     this.students = [];
//     this.isLoading = false;

//   });
// }
    // this.API.getServiceStudent().subscribe(
    //   (data) => {
    //     // fetch logic
    //     this.students=data
    //     this.isLoading = false;
    //   })
   
    }

    deleteStudents(id: number,index: number): void {
    if (confirm('Are you sure you want to delete this region?')) {
    this.API.deleteServiceStudent(id).subscribe(
      () => {
        //console.log(`Region with id ${id} deleted successfully.`);
        alert(`Student with id ${index + 1} deleted successfully.`);
        this.getStudents(); // Refresh the list after deletion
      },
      (error) => {
        console.error(`Error deleting region with id ${index + 1}:`, error);
      }
    );  
  }
}

editStudent(student: any) {
  this.router.navigate(['/about'], {
    state: { student: student }
  });
}

  }
