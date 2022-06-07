import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insertsuccesscard',
  templateUrl: './insertsuccesscard.component.html',
  styleUrls: ['./insertsuccesscard.component.css']
})
export class InsertsuccesscardComponent implements OnInit {

  longText:string;
  constructor(private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.params['id']);
    this.longText="Company with ID: "+id+" inserted successfully";
  }
  cancle(){
    this.router.navigate(['viewtable/Company_Alias']);
  }

}
