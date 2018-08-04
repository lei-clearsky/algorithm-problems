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
