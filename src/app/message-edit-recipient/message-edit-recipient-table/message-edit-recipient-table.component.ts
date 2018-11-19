import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material'

export interface Member{
  memberID : string;
  memberName: string;
  EGs: string;
  accountNumber: string;
  portfolioNumber: string;
  relationshipID : string;
  Attachments: string[];
}

@Component({
  selector: 'app-message-edit-recipient-table',
  templateUrl: './message-edit-recipient-table.component.html',
  styleUrls: ['./message-edit-recipient-table.component.css']
})
export class MessageEditRecipientTableComponent implements OnInit {
  curFiles:FileList;
  displayedColumns:string[] = ['Member ID','Member Name','Entitlement Groups','Account number','Portfolio Number','Relationship Id','Attachments','Add files','bUpload'];
  dialog: MatDialog;
  members :Member[]=[
    {memberID: 'MM123', memberName: 'Amit',EGs: 'EG1,EG2',accountNumber:'AN12345',portfolioNumber:'PN12345',relationshipID:'RR123',Attachments:['T.xls','p.pdf']}
  ]
  
  addtocurFile(files:FileList){
    console.log(files);
  }
  addFiles(member: Member,files:FileList){
    console.log(files);
    console.log('got it');
    //this.members.find(x=>x.memberID==member.memberID).Attachments.push(files[0].name);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  dataSource = new MatTableDataSource(this.members);
  constructor() { }

  ngOnInit() {
  }

}
