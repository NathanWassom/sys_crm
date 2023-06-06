import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{
  @Input()
  @HostBinding('style.backgroundColor')
  highlight: string = 'yellow';

  @HostBinding('style.cursor')
  get cursor() {
    return 'pointer';
  }

  defaultColor!: string;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight = 'lightgreen';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight = this.defaultColor;
  }

  ngOnInit(): void {
    this.defaultColor = this.highlight;
  }

}
