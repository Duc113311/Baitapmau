import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {};
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
