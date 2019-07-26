import { Component, OnInit } from '@angular/core';
import { CourseParams } from '../course';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  ngOnInit(){
  }

  Course1 = new CourseParams("HTML & CSS asoslari va boshlang'ich web-dizayn", 17, 0, "Kimdir", "/html_css", "../../assets/img/6f9fca717eb3c6c52a9878238e45ed8d_original.jpg");
  Course2 = new CourseParams("UI/UX dizayn", 9, 0, "Kimdir", "/UI_UX", "../../assets/img/ui-ux.jpg");
  Course3 = new CourseParams("Frontend darslari: Mayor-freymvorklar bilan", 28, 80000, "Kimdir", "/Frontend_pro", "../../assets/img/JS-framework.png");
  Course4 = new CourseParams("Backend darslari: C#, PY va PHP bilan", 33, 120000, "Kimdir", "/Backend_pro", "../../assets/img/6f9fca717eb3c6c52a9878238e45ed8d_original.jpg");
  Course5 = new CourseParams("Frontend darslari", 16, 0, "Kimdir", "/Frontend", "../../assets/img/1_2HMyUzkxeVEguBwDI9-rYg.png");
  Course6 = new CourseParams("PHP darslari", 29, 0, "Kimdir", "/php", "assets/img/bluebg.png");
  Course7 = new CourseParams("DHTML kurslari", 24, 0, "Kimdir", "/Backend", "../../assets/img/redMaterial.png");
  Course8 = new CourseParams("ASP.NET va Razor, C# darslari", 24, 180000, "Kimdir", "/ASP_Razor_CS", "../../assets/img/purple_material.png");

  courses: any[] = [this.Course1, this.Course2, this.Course3, this.Course4, this.Course5, this.Course6, this.Course7, this.Course8];


}
