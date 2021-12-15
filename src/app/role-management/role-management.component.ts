import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddRoleComponent } from './add-role/add-role.component';
@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  constructor(
    private setTitle: SetTitleService, 
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.setTitle.setTitle('WHS-Role Management');
    
  }
  openDialog(id) {
		let dialogRef = this.dialog.open(AddRoleComponent, {
      height:'50%',
     width:'500px',
    
			data: {
				action: "new",
				userId: id,
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
      if(result === 'true' ){
       
      }
			console.log("AddRoleComponent -> openDialog -> result", result);
			
			console.log("The dialog was closed");
		});
	}

}
