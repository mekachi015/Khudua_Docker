import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isMenuOpen = false;

  constructor (private router: Router) {}

  //method to navigate to home page
  generalRedirect(): void{
    this.router.navigate(['/']);
  }

  // Method to navigate to the About Us page
  goToHome(): void {
    this.router.navigate(['home']);
  }

   // Method to navigate to the About Us page
   goToAboutUs(): void {
    this.router.navigate(['about']);
  }

  // Method to navigate to the Products page
  goToProducts(): void {
    this.router.navigate(['products']);
  }

  // Method to navigate to the Services page
  goToServices(): void {
    this.router.navigate(['services']);
  }

  // Method to navigate to the Find Us page
  goToContact(): void {
    this.router.navigate(['contact']);
  }

  // Method to toggle the mobile menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }



}
