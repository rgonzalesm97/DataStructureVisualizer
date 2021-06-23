import { trigger, state, style, animate, transition, keyframes, query, animateChild, group } from "@angular/animations";

export const nodeAnims = trigger('nodeAnims', [
  transition('* => in', group([
    animate('4s', keyframes([
      style({opacity: 0, transform: 'translateY(150%)', offset: 0}),
      style({opacity: 1, transform: 'translateY(150%)', offset: 0.25}),
      style({opacity: 1, transform: 'translateY(150%)', offset: 0.5}),
      style({opacity: 1, transform: 'translateY(150%)', offset: 0.75}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1}),
    ]))
  ])),
  transition('* => out', group([
    animate('4s', keyframes([
      style({ opacity: 1, transform: 'translateY(0)', offset: 0}),
      style({ opacity: 1, transform: 'translateY(150%)', offset: 0.25}),
      style({ opacity: 1, transform: 'translateY(150%)', offset: 0.5}),
      style({ opacity: 1, transform: 'translateY(150%)', offset: 0.75}),
      style({ opacity: 0, transform: 'translateY(150%)', offset: 1}),
    ]))
  ]))
]);

export const arrowAnims = trigger('arrowAnims', [
  transition('* => in', animate('4s', keyframes([
    style({ opacity: 0, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 0}),
    style({ opacity: 0, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 0.25}),
    style({ opacity: 1, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 0.5}),
    style({ opacity: 1, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 0.75}),
    style({ opacity: 1, transform: 'translateY(0px) rotate(0deg) scaleX(1)', offset: 1}),
  ]))),
  transition('* => previousin', animate('4s', keyframes([
    style({ opacity: 1, transform: 'rotate(0deg) scaleX(3.45)', offset: 0}),
    style({ opacity: 1, transform: 'rotate(0deg) scaleX(3.45)', offset: 0.25}),
    style({ opacity: 1, transform: 'rotate(0deg) scaleX(3.45)', offset: 0.5}),
    style({ opacity: 1, transform: 'rotate(55deg) scaleX(1.5)', offset: 0.75}),
    style({ opacity: 1, transform: 'rotate(0deg) scaleX(1)', offset: 1}),
  ]))),
  transition('* => out', animate('4s', keyframes([
    style({ opacity: 1, transform: 'translateY(0px) rotate(0deg) scaleX(1)', offset: 0}),
    style({ opacity: 1, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 0.25}),
    style({ opacity: 1, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 0.5}),
    style({ opacity: 1, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 0.75}),
    style({ opacity: 0, transform: 'translateY(100px) rotate(-55deg) scaleX(1.5)', offset: 1}),
  ]))),
  transition('* => previousout', animate('4s', keyframes([
    style({ opacity: 1, transform: 'rotate(0deg) scaleX(1)', offset: 0}),
    style({ opacity: 1, transform: 'rotate(55deg) scaleX(1.5)', offset: 0.25}),
    style({ opacity: 1, transform: 'rotate(55deg) scaleX(1.5)', offset: 0.35}),
    style({ opacity: 1, transform: 'rotate(0deg) scaleX(3.45)', offset: 0.65}),
    style({ opacity: 1, transform: 'rotate(0deg) scaleX(3.45)', offset: 1}),
  ])))
]);