import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TercerComponente } from './components/tercer-componente/tercer-componente';

@Component({
  imports: [RouterOutlet, TercerComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mi-proyecto');
}
