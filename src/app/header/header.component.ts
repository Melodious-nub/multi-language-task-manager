import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedLang: string;

  constructor(private translate: TranslateService) {
    // Initialize the selected language based on localStorage or default to 'en'
    const savedLang = localStorage.getItem('language') || navigator.language.split('-')[0] || 'en';
    this.selectedLang = savedLang;
    this.translate.use(savedLang);
  }

  switchLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.translate.use(lang);
    this.selectedLang = lang; // Update the selected language
    localStorage.setItem('language', lang);
  }
}