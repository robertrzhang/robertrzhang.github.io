declare module 'react-animate-on-scroll' {
  import { Component } from 'react';
  
  interface ScrollAnimationProps {
    animateIn?: string;
    animateOut?: string;
    offset?: number;
    duration?: number;
    delay?: number;
    initiallyVisible?: boolean;
    animateOnce?: boolean;
    style?: React.CSSProperties;
    scrollableParentSelector?: string;
    children?: React.ReactNode;
  }
  
  export default class ScrollAnimation extends Component<ScrollAnimationProps> {}
}
