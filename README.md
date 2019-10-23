# Angular Countdown Directive Sample

```typescript
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
```

**Usage**

```angular2html
<h1>Angular Directive in Practice</h1>
<hr>
<p countdown [time]="10000"></p>
<p countdown [time]="5000" [startingText]="'Prepare to start....'"></p>
<span countdown [time]="7500" [endingText]="'We\'re about to close in a moment'"></span>
```
