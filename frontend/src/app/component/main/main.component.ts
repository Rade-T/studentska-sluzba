import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../../model/ucenik.model';
import { UcenikService } from '../../service/ucenik.service';
import { AuthenticationService } from '../../security/authentication.service';
import { JwtUtilsService } from '../../security/jwt-utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private jwtUtilsService: JwtUtilsService) {

  }

  ngOnInit() {
    let token = this.authenticationService.getToken();
    let roles = this.jwtUtilsService.getRoles(token.toString());
    
    if (roles[0] == "nastavnik") {
      console.log("Ulogovan je nastavnik");
      document.getElementById('uceniciLink').remove();
      document.getElementById('predmetiLink').remove();
      document.getElementById('uplateLink').remove();
      document.getElementById('dokumentiLink').remove();
      document.getElementById('pohadjanjaLink').remove();
      document.getElementById('polaganjaLink').remove();
    }

    if (roles[0] == "ucenik") {
      console.log("Ulogovan je ucenik");
      document.getElementById('nastavniciLink').remove();
    }
  }

}
