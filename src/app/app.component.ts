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
				const widths = [90, 80, 70, 50, 50, 50, 50, 35, 35, 10];
				let width = 0;

				// // for(let i = 0; i <= 10; i++) {
				// // 	let skill_bar = document.querySelector(`#skill-bar${i}`) as HTMLElement | null;
				// // 	skills_bars.push(skill_bar);
				// // 	if(width < widths[i]) {
				// // 		setInterval(() => {
				// // 			width += 0.05;
				// // 			skills_bars[i]!.style.width = `${width}%`;
				// // 		}, 10);
				// // 	}
				// }
			}, 20);

			circle!.onmouseout = () => setTimeout(() => {
				const modal = document.querySelector('#modalId') as HTMLElement | null;
				modal!.style.display = 'none';
			}, 2000);
		}
  }
}
