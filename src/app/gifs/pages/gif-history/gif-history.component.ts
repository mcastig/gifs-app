import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
  styleUrl: './gif-history.component.css'
})
export default class GifHistoryComponent {
  public gifsService = inject(GifsService);
  public query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

  public gifsByKey = computed(() => {
    return this.gifsService.getHistoryGifs(this.query());
  })
}



