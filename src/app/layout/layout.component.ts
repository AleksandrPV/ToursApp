import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AsideComponent } from "./aside/aside.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, AsideComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
