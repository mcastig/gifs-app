import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
};

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);
  public trendingGifs = signal<Gif[]>([]);
  public trendingGifsLoading = signal(true);
  public searchingGifsLoading = signal(true);
  public searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  public searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  public saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });

  public loadTrendingGifs() {
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
    return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      },
    }).pipe(
      map(( { data }) => data ),
      map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
      tap((items) => {
        this.searchHistory.update( (history) => ({
          ...history,
          [query.toLocaleLowerCase()]: items
        }));
      })
    );
  }

  public getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
