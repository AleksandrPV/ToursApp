import { Component} from '@angular/core';

@Component({
  selector: 'app-authorization',
  imports: [],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  ngOnInit(): void {
    console.log("OnInit -> AuthorizationComponent")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy -> AuthorizationComponent")
  }

}
