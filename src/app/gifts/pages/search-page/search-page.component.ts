import { Component, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export default class SearchPageComponent {
  public gifService = inject(GifsService);
  public searchingGifs = this.gifService.searchGifs;

  public onSearch(query: string) {
    this.gifService.searchGifs(query);
  }
 }
