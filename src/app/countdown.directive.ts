import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[countdown]'
})
export class CountdownDirective implements OnInit {
  @Input() time;
  @Input() startingText;
  @Input() endingText;
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.innerHTML = this.startingText || `Let's start...`;
    setTimeout(() => {
      this.el.nativeElement.innerHTML = this.endingText || 'Okay...closing now!';
    }, this.time);
  }
}
