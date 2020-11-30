import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {ApiService} from "../../auth/services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any = []

  constructor(private authService: AuthService, private apiService: ApiService) {
  }


  ngOnInit() {
    this.apiService.get('tasks').subscribe((data: any) => {
      console.log(data);
      this.data = data.data;
    });
  }
  logout() {
    this.authService.logout();
  }

}
