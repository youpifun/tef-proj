import { Injectable } from '@angular/core';
import { Pages } from '../constnats';

@Injectable({providedIn:'root'})
export class PageContentService {
  currentPage: Pages = Pages.MAIN_PAGE;
}
