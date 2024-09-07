import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ServicesComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isDrawerOpen = false;
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
