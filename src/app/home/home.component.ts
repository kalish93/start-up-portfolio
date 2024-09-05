import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from "../services/services.component";
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, ServicesComponent, FooterComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
