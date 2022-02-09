import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from './scroll.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [ScrollComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
	exports: [ScrollComponent, MatButtonModule, MatIconModule, MatTooltipModule]
})
export class ScrollModule {}
