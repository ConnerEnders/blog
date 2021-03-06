import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	// codeUrl = "https://gist.github.com/ConnerEnders/f0a471d8f1d4c72c6a4a179205d7ad72";
	// gistId = "f0a471d8f1d4c72c6a4a179205d7ad72";
	// gist;

  css = `*{box-sizing:border-box}:root{--sans:1em/1.6 system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Droid Sans,Helvetica Neue,Fira Sans,sans-serif;--mono:SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,"Courier New",monospace;--c1:#0074d9;--c2:#e6e6e6;--c3:#f6f6f6;--c4:#000;--c5:#fff;--c6:#ed3;--m1:8px;--rc:8px}@media (prefers-color-scheme:dark){:root{--c2:#23241f;--c3:#34352c;--c4:#fff}nav>img{filter:invert(1)}}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0;font:var(--sans);font-weight:400;font-style:normal;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;background-color:var(--c3);color:var(--c4)}iframe,img{border:none;max-width:100%}a{color:var(--c4);text-decoration:none}a:hover{color:var(--c1);text-decoration:underline}code,pre{font:1em/1.6 var(--mono)}blockquote{border-left:5px solid var(--c2);padding:1em 1.5em;margin:0}hr{border:0;border-bottom:1px solid var(--c4)}h1,h2,h3,h4,h5,h6{margin:.6em 0;font-weight:400}h1{font-size:2.625em}h1,h2{line-height:1.2}h2{font-size:1.625em}h3{font-size:1.3125em;line-height:1.24}h4{font-size:1.1875em;line-height:1.23}h5,h6{font-size:1em;font-weight:700}table{border-collapse:collapse;border-spacing:0;margin:1em 0}td,th{text-align:left;vertical-align:top;border:1px solid;padding:.4em}tfoot,thead{background:var(--c2)}button,code,img,input,pre,select,textarea{border-radius:var(--rc)}input,select,textarea{font-size:1em;color:var(--c4);background:var(--c2);border:0;padding:.6em}button,input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;font-size:1em;display:inline-block;color:var(--c5);background:var(--c1);border:0;margin:4px;padding:.6em;cursor:pointer;text-align:center}button:focus,button:hover,input:hover,select:hover,textarea:hover{opacity:.8}section{display:flex;flex-flow:row wrap}[style*="--c:"],article,aside,section>section{flex:var(--c,1);margin:var(--m1)}article{background:var(--c2);border-radius:var(--rc);padding:1em;box-shadow:0 1px 0 rgba(0,0,0,.3)}[style*="--c:"]:first-child,article:first-child,section>section:first-child{margin-left:0}[style*="--c:"]:last-child,article:last-child,section>section:last-child{margin-right:0}::selection{background:var(--c6);color:#000}header{padding:1em;font-size:18px;text-align:center}header,table{width:100%}nav>a{margin:0 1em}nav>img{margin:-10px}footer,main{margin:0 auto;width:60%;text-align:left;padding:0 20px}section>section{color:#fff;background-color:var(--c1);padding:15px;margin:10px 8px;text-align:center}img{margin:8px auto}.hljs{padding:1em!important}@media (max-width:992px){footer,main{width:100%;margin:0}:not(nav)>img,pre,section>article,section>section{margin-left:-20px!important;margin-right:-20px}:not(nav)>img,section>article,section>section{max-width:unset;width:calc(100% + 40px)}:not(nav)>img,code,section>article,section>section{border-radius:unset}article,section{flex:none}}`;

  lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida in neque in blandit. Fusce eu dapibus ligula. In varius, ligula id congue sollicitudin, augue leo gravida justo, non sollicitudin neque quam in libero.";

	code = `package main

func main() {
  go something()
}`;

	ts = `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  // ts = `export class Something {
  //   constructor (public stuff, public things) {}
  // }`;
}
