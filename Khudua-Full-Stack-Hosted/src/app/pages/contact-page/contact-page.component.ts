import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserQuery } from 'src/app/interface/contactQuery';
import { EmailServiceService } from 'src/app/services/email-service.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  userQuery: UserQuery = {
    name: '',
    lastName: '',
    cellphone: '',
    email: '',
    query: ''
  };



  constructor(private emailService: EmailServiceService) { }

  // submitQuery(contactQuery: UserQuery): void {
  //   this.emailService.submitQuery(contactQuery).subscribe({
  //     next: (response) => {
  //       console.log('Query submitted successfully:', response);
  //       Swal.fire({
  //         title: 'Success!',
  //         text: 'Your query has been submitted successfully.',
  //         icon: 'success',
  //         confirmButtonText: 'OK'
  //       });
  //     },
  //     error: (error) => {
  //       console.error('Error submitting query:', error);
  //       const status = error.status;

  //       if (status === 403) {
  //         Swal.fire({
  //           title: 'Error!',
  //           text: 'Something went wrong.',
  //           icon: 'error',
  //           confirmButtonText: 'OK'
  //         });
  //       } else {
  //         Swal.fire({
  //           title: 'Error!',
  //           text: 'An unexpected error occurred.',
  //           icon: 'error',
  //           confirmButtonText: 'OK'
  //         });
  //       }
  //     }
  //   });
  // }

  submitQuery(contactQuery: UserQuery): void {
    this.emailService.submitQuery(contactQuery).subscribe({
      next: (response: HttpResponse<string>) => {
        if (response.status === 200) {
          console.log('Query submitted successfully:', response.body);
          // Display success message only if the status code is 200
          Swal.fire({
            title: 'Success!',
            text: 'Your query has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      },
      error: (error) => {
        console.error('Error submitting query:', error);
        // Display specific error messages based on the status code
        let errorMessage = 'An unexpected error occurred.';

        switch (error.status) {
          case 400:
            errorMessage = 'Bad Request: The server could not understand the request.';
            break;
          case 401:
            errorMessage = 'Unauthorized: You are not authorized to perform this action.';
            break;
          case 403:
            errorMessage = 'Forbidden: Access is denied.';
            break;
          case 404:
            errorMessage = 'Not Found: The requested resource could not be found.';
            break;
          case 500:
            errorMessage = 'Internal Server Error: The server encountered an error.';
            break;
          default:
            errorMessage = 'An unexpected error occurred.';
            break;
        }

        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }
}
