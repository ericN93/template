import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ApiService} from '../_services/api-service/api.service';
import {DialogSpecificComponent} from '../_dialogs/dialog-specific/dialog-specific.component';
import { Router } from '@angular/router';
import {UserService} from '../_services/user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'app';
  public loggedInUser = ""
  public posts: any;
  public displayedColumns = ['id', 'title'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(public dialog: MatDialog, public api:ApiService, public userService: UserService, public router: Router) {
    this.loggedInUser = this.userService.getEmail()
    this.api.getData().subscribe(data => {
      this.posts = data;
      this.dataSource = new MatTableDataSource<Post>(this.posts);
      this.dataSource.paginator = this.paginator;
    }, error2 => {
      console.log(error2)
    });
  }

  openDialog(post) {
    this.dialog.open(DialogSpecificComponent, {
      width: "100vw",
      height: "35vh",
      data: post
    });
  }

  goToDetailedPost(id) {
    this.router.navigate(['/detailed', id]);
  }

  logOut() {
    this.userService.setUserLoggedOut()
    this.router.navigate(["/login"]);
  }

}

export interface Post {
  id: number;
  title: string;
  body: string;
}
