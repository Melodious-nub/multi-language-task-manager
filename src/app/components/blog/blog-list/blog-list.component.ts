import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { map } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {

  constructor(private api: BlogService) { }

  ngOnInit(): void {
    this.fetchAllBlogs();
  }

  // Signal to store the list of blogs
  blogs = signal<Blog[]>([
    // Add more blogs here
  ]);
  isLoading = signal<boolean>(true);

  fetchAllBlogs() {
    this.api.getBlog().pipe(
      map((responseData: { [key: string]: Blog }) => {
        const blogArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            blogArray.push({ ...responseData[key], id: key });
          }
        }
        return blogArray;
      })
    ).subscribe({
      next: (res) => {
        this.blogs.set(res)
        console.log(res);
      },
      complete: () => this.isLoading.set(false),
      error: (err) => console.log(err)
    })
  }

  // Toggle Edit Mode and populate form data for editing
  editBlog(blog: any) {

  }

  // Delete a blog
  deleteBlog(index: number) {

  }

  // Refresh blogs (simulated)
  refreshBlogs() {
    console.log('Refreshing blogs...');
    this.isLoading.set(true)
    this.fetchAllBlogs();
  }
}
