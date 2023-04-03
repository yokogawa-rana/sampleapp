import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectSpacing(spacing: string) {
    const body = document.querySelector('body');
    if (body) {
      const len = body.classList.length;
      for (let i = len - 1; i >= 0; i--) {
        const cl = body.classList.item(i);
        if (cl) {
          if (cl.startsWith('spacing-')) {
            body.classList.remove(cl);
          }
        }
      }
      body.classList.add('spacing-' + spacing);
    }
  }

  onSelectFontSize(fontSize: string) {
    const html = document.querySelector('html');
    let cls = 'font-medium';
    if (html) {
      switch (fontSize) {
        case 'x-small':
          cls = 'font-x-small';
          break;
        case 'small':
          cls = 'font-small';
          break;
        case 'medium':
          cls = 'font-medium';
          break;
        case 'large':
          cls = 'font-large';
          break;
        case 'x-large':
          cls = 'font-x-large';
          break;
      }
      html.classList.remove('font-x-small');
      html.classList.remove('font-small');
      html.classList.remove('font-medium');
      html.classList.remove('font-large');
      html.classList.remove('font-x-large');
      html.classList.add(cls);
    }
  }

  onSelectTheme(theme: string) {
    const html = document.querySelector('html');
    let cls = 'light';
    if (html) {
      switch (theme) {
        case 'light-blue':
          cls = 'light-theme';
          break;
        case 'light-indigo':
          cls = 'light-theme';
          break;
        case 'dark':
          cls = 'dark-theme';
          break;
      }
      html.classList.remove('dark-theme');
      html.classList.remove('light-theme');
      html.classList.add(cls);
    }

    const body = document.querySelector('body');
    let cls2 = null;
    if (body) {
      switch (theme) {
        case 'light-blue':
          cls2 = 'xy-blue-theme';
          break;
        case 'light-indigo':
          cls2 = 'xy-indigo-theme';
          break;
      }
      body.classList.remove('xy-blue-theme');
      body.classList.remove('xy-indigo-theme');
      if (cls2) {
        body.classList.add(cls2);
      }
    }
  }

  onClickDashboard() {
    alert('Dashboard menu clicked!');
  }

  onClickInbox() {
    alert('Inbox menu clicked!');
  }

  onClickInbox2() {
    alert('Inbox menu item #2 clicked!');
  }
}
