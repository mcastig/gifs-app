import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export default class SearchPageComponent {
  public gifService = inject(GifsService);
  public searchingGifs = signal<Gif[]>([]);

  public onSearch(query: string) {
    this.gifService.searchGifs(query)
      .subscribe( (resp) => {
        this.searchingGifs.set(resp);
      });
  }
 }
