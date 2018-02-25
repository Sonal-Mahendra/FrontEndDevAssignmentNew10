import { Component, OnInit } from '@angular/core';
import {MyCodeServiceService} from'../my-code-service.service'
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

InputFormGroup:FormGroup;
Course: any; 
CourseId:number;
CourseList:any;

 
  constructor(private builder:FormBuilder,private _myCodeService: MyCodeServiceService) {
    this.getCourseList();
    console.log("CourseList:::cons",this.CourseList);
   }
   getCourseList() {  
   this.CourseList= this._myCodeService.getCourseList();  
    console.log("CourseList:::",this.CourseList);
    ;
  }
  
  ngOnInit() {

console.log(this.InputFormGroup);
this.InputFormGroup=this.builder.group({
  input1:['',Validators.required],
  input2:['',Validators.required],
  input3:['',Validators.compose([Validators.required,Validators.minLength(2)])],
  CourseId:['',]
  
});
//this.courses=new FormControl("");

  }
handleSubmit(e,data){
  e.preventDefault();
  console.log(data);
  //console.log(this.ipt1.value,this.ipt2.value,this.ipt3.value);
console.log("Input 1 required??",this.InputFormGroup.controls.input1.hasError('required')); 
console.log("Input 2 required??",this.InputFormGroup.controls.input2.hasError('required')); 
console.log("Input 3 required??",this.InputFormGroup.controls.input3.hasError('required')); 

console.log("Input 3 minlength??",this.InputFormGroup.controls.input3.hasError('minlength')); 
}
selectCourse() {  
  alert(this.CourseId);  
}
}
