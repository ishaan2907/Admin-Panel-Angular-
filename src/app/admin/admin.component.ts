import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseList } from '../interfaces/course-list';
import { CourselistService } from '../services/courselist.service';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  list: CourseList[] = [];
  private listService: 

}
