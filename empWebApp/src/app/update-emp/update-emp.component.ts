import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { Emp } from '../emp.model';
import { FileUploaderService } from '../file-uploader.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  // object to be updated
  emp: Emp;
  constructor(private empService: EmpService,
    private alertService: AlertService,
    private router: Router,
    private fileUploader: FileUploaderService) { 
      this.emp = this.empService.emp;
    }

  public update()
  {
    this.empService.update(this.emp)
        .subscribe(data => {
          this.alertService.success('successfully udpated');
          this.router.navigate(['view']);
        });
  }  
  ngOnInit() {
  }
  fileuploaderFileChange(files: FileList){
    console.log('uploading ',files[0].name);
    this.fileUploader.uploadFile(files[0])
    .subscribe((result)=>{
      this.alertService.success('successfully uploaded.');
     
    });
  }
}
