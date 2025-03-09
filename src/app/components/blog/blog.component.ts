import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from './blog.service';
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogFormComponent } from "./blog-form/blog-form.component";

@Component({
  selector: 'app-blog',
  imports: [FormsModule, CommonModule, BlogListComponent, BlogFormComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
