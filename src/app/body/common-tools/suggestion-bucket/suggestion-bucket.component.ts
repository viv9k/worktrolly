import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  map } from 'rxjs/operators';
import { UserAppSetting } from 'src/app/Interface/UserInterface';


@Component({
  selector: 'app-suggestion-bucket',
  templateUrl: './suggestion-bucket.component.html',
  styleUrls: ['./suggestion-bucket.component.css']
})
export class SuggestionBucketComponent implements OnInit {

  @Input("email") email: string;

  userName: string;
  
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.readTeamMemberName();
  }

  readTeamMemberName(){
    this.db.collection<UserAppSetting>('Users',ref => ref.where('email','==',this.email)).snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as UserAppSetting;
        const id = a.payload.doc.id
        return {id,...data};
    }))).subscribe(user=>{
          this.userName= user[0].displayName;
        });

  }
}
