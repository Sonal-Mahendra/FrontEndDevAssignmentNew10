import { Injectable } from '@angular/core';
import { Course } from './course';
@Injectable()
export class MyCodeServiceService {
  data: Course[] = [];
  constructor() {
    
   }
getCourseList(){
  return this.data=[    
    {    
      "Id": 3,    
      "Course": "AngularJs"    
    },    
    {    
      "Id": 1035,    
      "Course": "MongoDb"    
    },    
    {    
      "Id": 22,    
      "Course": "ReactJs"    
    },    
    {    
      "Id": 20,    
      "Course": "NodeJs"    
    },    
    {    
      "Id": 15,    
      "Course": "Case1"    
    },    
    {    
      "Id": 11,    
      "Course": "Case2"
    }        
  ]    
}
}
