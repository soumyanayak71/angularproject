import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { XMLData } from '../XMLData';
import { XmlDataService } from './xml-data.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver/dist/FileSaver';

@Component({
  selector: 'app-xml-data',
  templateUrl: './xml-data.component.html',
  styleUrls: ['./xml-data.component.css']
})
export class XmlDataComponent implements OnInit {
  xmlDataForm= this.fb.group({
    fileName: ['', Validators.required],
    fileValue: ['', Validators.required]
  });
  downloadButton:boolean=false;
  xmlData: XMLData = {
    fileName:'',
    fileValue:''
  };
  SubmitForm(){
    this.xmlData.fileName= this.xmlDataForm.get('fileName').value;
    this.xmlData.fileValue= this.xmlDataForm.get('fileValue').value;
    this.api.sendData(this.xmlData).subscribe(response  => {
      console.log(response);
      if(response.status==200){
        this.downloadButton=true;
      }
    });
  }
  downloadFile(){
    this.api.getFile().subscribe(results =>
    {console.log(results);
    saveAs(results, this.xmlData.fileName);
    });
  }
  constructor(
    private fb: FormBuilder,
    private api: XmlDataService) { }

  ngOnInit() {
  }

}
