## Good resources

### CSS Core
- [CSS Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
  ```css
  body {
    counter-reset: section;                     /* Set a counter named 'section', and its initial value is 0. */
  }

  h3::before {
    counter-increment: section;                 /* Increment the value of section counter by 1 */
    content: counter(section);                  /* Display the value of section counter */
  }
  ```
- [Sticky Footer, Five Ways](https://css-tricks.com/couple-takes-sticky-footer/)
  - [Chrome position:fixed and transformZ bug](https://stackoverflow.com/questions/12731975/chrome-positionfixed-and-transformz-bug)
  - [Why need flex-shrink: 0](https://codepen.io/noahblon/post/practical-guide-to-flexbox-dont-forget-about-flex-shrink)
