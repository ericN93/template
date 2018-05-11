import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api-service/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent {

  public post: any;
  public lan = 56.1814833;
  public lag = 15.5922821;

  constructor(public api: ApiService, private route: ActivatedRoute, public snackBar: MatSnackBar) {

     let id = this.route.snapshot.paramMap.get('id');
     console.log(id);

    this.api.getSpecificPost(id).subscribe(data => {
      this.post = data;
      console.log(this.post)
    }, error2 => {
      console.log(error2)
    });
  }

  openSnackBar() {
    this.snackBar.open("Bth", "Nice", {
      duration: 2000,
    });
  }

}
