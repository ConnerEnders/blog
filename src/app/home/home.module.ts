import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

export function getHighlightLanguages() {
  return {
    // go: () => import('highlight.js/lib/languages/go'),
    // typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
  };
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HomeRoutingModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ]
})
export class HomeModule { }
