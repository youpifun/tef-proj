import { Component } from '@angular/core';
import { PageContentService } from './services/page-content';
import { LogoRedirectUrls, Pages } from './constnats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-landing';
  pages = Pages;
  logoRedirectUrls = LogoRedirectUrls;

  constructor(public pageContentService: PageContentService) {
  }

  handleRedirect(redirectTo: LogoRedirectUrls) {
    switch (redirectTo) {
      case LogoRedirectUrls.TEF: {
        window.location.href = 'https://vk.com/dekanat_tef';
        break;
      }
      case LogoRedirectUrls.UNIVERSITY: {
        window.location.href = 'https://samgtu.ru/';
        break;
      }
    }
  }
}
