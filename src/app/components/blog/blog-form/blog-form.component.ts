import { Component, signal } from '@angular/core';
import { BlogService } from '../blog.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {
  currentDate = new Date().toISOString().split('T')[0];

  // Signals for blog state
  isEditMode = signal(false); // Track if editing
  blogForm = signal<Blog>({
    title: '',
    description: '',
    date: this.currentDate
  });

  invalidForm = signal<boolean>(false)

  constructor(private api: BlogService) { }

  // Handles submit/update
  onSubmit(form: NgForm) {
    if (form.invalid) return this.invalidForm.set(true) // Stop if form is invalid

    if (this.isEditMode()) {
      // Handle update logic
      console.log('Updating blog:', this.blogForm());

      // this.api.updateBlog(this.blogForm()).subscribe({
      //   next: (res) => console.log('Blog Updated:', res),
      //   error: (err) => console.error('Update Error:', err)
      // });

    } else {
      // Handle new blog post
      console.log('Creating blog:', this.blogForm());

      this.api.postBlog(this.blogForm()).subscribe({
        next: (res) => console.log('Blog Created:', res),
        error: (err) => console.error('Create Error:', err)
      });
      this.invalidForm.set(false)
    }

    // Reset form after submit
    this.resetForm();
  }

  // Populate form for editing
  editBlog(blog: Blog) {
    this.blogForm.set({ ...blog });
    this.isEditMode.set(true);
  }

  // Reset form state
  resetForm() {
    this.blogForm.set({
      title: '',
      description: '',
      date: this.currentDate
    });
    this.isEditMode.set(false);
  }
}
