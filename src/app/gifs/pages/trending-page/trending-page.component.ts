import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
// import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html'
})
export default class TrendingPageComponent {
  public gifService = inject(GifsService);
  public scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  public onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
