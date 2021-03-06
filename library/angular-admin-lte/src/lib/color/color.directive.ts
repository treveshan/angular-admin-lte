import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

import { colors, colorsAliases } from './color.definition';
import { ColorService } from './color.service';

@Directive({
  selector: '[mkColor]',
  providers: [ColorService]
})
export class BackgroundColorDirective {
  /**
   * @method constructor
   * @param private elementRef   [description]
   * @param private renderer2    [description]
   * @param private colorService [description]
   */
  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private colorService: ColorService
  ) {}

  @Input('mkColorCondition') condition = true;
  @Input('mkColorPrefix') prefix: string;
  @Input('mkColorProperty') property: string;
  @Input('mkColor') set color(color: string) {
    this.colorService.setBackgroundColor(color, this.condition, this.property, this.prefix);
  }
}

@Directive({
  selector: '[mkFontColor]',
  providers: [ColorService]
})
export class ColorDirective {
  /**
   * @method constructor
   * @param private elementRef   [description]
   * @param private renderer2    [description]
   * @param private colorService [description]
   */
  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private colorService: ColorService
  ) {}

  @Input('mkFontColor') set color(color: string) {
    this.colorService.setFontColor(color);
  }
}
