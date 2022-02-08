import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from './scroll.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ScrollComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule],
	exports: [ScrollComponent, MatButtonModule, MatIconModule]
})
export class ScrollModule {}
