import { DOCUMENT, ViewportScroller } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Inject,
	Output
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@UntilDestroy()
@Component({
	selector: 'app-scroll',
	template: `
		<button
			matTooltip="Scroll To Top"
			matTooltipPosition="above"
			*ngIf="showScroll$ | async"
			mat-mini-fab
			color="primary"
			(click)="onScrollToTop()"
		>
			<div class="scroll-icon"><mat-icon>arrow_upward</mat-icon></div>
		</button>
	`,
	styleUrls: ['./scroll.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollComponent {
	@Output() scrollToTop = new EventEmitter<void>();
	readonly showScroll$: Observable<boolean> = fromEvent(
		this.document,
		'scroll'
	).pipe(
		untilDestroyed(this),
		map(() => this.viewport.getScrollPosition()?.[1] > 0)
	);
	constructor(
		@Inject(DOCUMENT) private readonly document: Document,
		private readonly viewport: ViewportScroller
	) {}

	onScrollToTop(): void {
		this.scrollToTop.emit();
		(function smoothscroll() {
			var currentScroll =
				document.documentElement.scrollTop || document.body.scrollTop;
			if (currentScroll > 0) {
				window.requestAnimationFrame(smoothscroll);
				window.scrollTo(0, currentScroll - currentScroll / 8);
			}
		})();
	}
}
