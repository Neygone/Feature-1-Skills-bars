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

			circle!.onmouseover = () => setTimeout(() => {
				const modal = document.querySelector('#modalId') as HTMLElement | null;
				modal!.style.display = 'flex';
				const skills_bars: any = [];
				const widths = [90, 80, 70, 50, 50, 50, 50, 35, 35, 10]; // HTML, CSS, JavaScript, PHP, SQL, TypeScript, Angular, NodeJs, Git, MongoDB
				// let width = 0;

				for(let i = 0; i < widths.length; i++) {
					let skill_bar = document.querySelector(`#skill-bar${i}`) as HTMLElement | null;
					skills_bars.push(skill_bar);
					this.increaseWidth(i, widths[i], skills_bars[i]);
				}
			}, 20);

			circle!.onmouseout = () => setTimeout(() => {
				const skills_bars: any = [];
				const widths = [90, 80, 70, 50, 50, 50, 50, 35, 35, 10]; // HTML, CSS, JavaScript, PHP, SQL, TypeScript, Angular, NodeJs, Git, MongoDB

				for(let i = 0; i < widths.length; i++) {
					let skill_bar = document.querySelector(`#skill-bar${i}`) as HTMLElement | null;
					skills_bars.push(skill_bar);
					this.decreaseWidth(i, widths[i], skills_bars[i]);
				}

				// const modal = document.querySelector('#modalId') as HTMLElement | null;
				// modal!.style.display = 'none';
			}, 20);
		}
  }

  increaseWidth(i: number = 0, skill_bar_width : number, skill_bar: HTMLElement | null): void {
	setInterval(() => {
		i += 0.5;
		if(i <= skill_bar_width) skill_bar!.style.width = `${i}%`;
	}, 10);
  }

  decreaseWidth(i: number = 0, skill_bar_width : number, skill_bar: HTMLElement | null): void {
	setInterval(() => {
		i -= 0.5;
		if(i >= 0) skill_bar!.style.width = `${i}%`;
	}, 10);
  }
}
