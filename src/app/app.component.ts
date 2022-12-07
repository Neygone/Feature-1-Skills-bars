import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feature-1-skills-bars';
	
	constructor() {
		window.onload = () => {
			const circle = document.querySelector('#circleId') as HTMLElement | null;
			const skills_bars: any = [];
			const widths = [90, 80, 70, 50, 50, 50, 50, 35, 35, 10]; // HTML, CSS, JavaScript, PHP, SQL, TypeScript, Angular, NodeJs, Git, MongoDB
			const modal = document.querySelector('#modalId') as HTMLElement | null;

			circle!.onmouseover = () => setTimeout(() => {
				
				modal!.style.display = 'flex';

				for(let i = 0; i < widths.length; i++) {

					if(skills_bars.length < 10) {
						let skill_bar = document.querySelector(`#skill-bar${i}`) as HTMLElement | null;
						skills_bars.push(skill_bar);
					}
					this.increaseWidth(i, widths[i], skills_bars[i]);
				}
			}, 20);

			circle!.onmouseout = () => setTimeout(() => {

				for(let i = 0; i < widths.length; i++) {
					this.decreaseWidth(widths[i], skills_bars[i], Math.max(...widths), modal);
				}
			}, 20);
		}
  }

  increaseWidth(i: number = 0, skill_bar_width : number, skill_bar: HTMLElement | null): void {
	setInterval(() => {
		i += 0.5;

		if(i <= skill_bar_width) skill_bar!.style.width = `${i}%`;
	}, 10);
  }

  decreaseWidth(i: number, skill_bar: HTMLElement | null, max_width: number, modal: HTMLElement | null): void {
	setInterval(() => {
		i -= 0.5;
		max_width -= 0.5;
		
		if(max_width === 0) modal!.style.display = 'none';
		else if(i > 0) skill_bar!.style.width = `${i}%`;
	}, 10);
  }
}