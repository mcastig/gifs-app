import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);
  public trendingGifs = signal<Gif[]>([]);
  public searchingGifts = signal<Gif[]>([]);
  public trendingGifsLoading = signal(true);
  public searchingGifsLoading = signal(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      },
    }).subscribe((resp) => {
       const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
       this.trendingGifs.set(gifs);
       this.trendingGifsLoading.set(false);
    })
  }

  searchGifs(query: string) {
    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      },
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.searchingGifts.set(gifs);
      this.searchingGifsLoading.set(false);
    })
  }
}
