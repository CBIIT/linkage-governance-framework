require('@uswds/uswds');
import tippy, {inlinePositioning} from 'tippy.js';


document.addEventListener("DOMContentLoaded", () => {
  // DOM is fully loaded and parsed.
  // Safe to select elements: document.querySelector('#elementID');
  tippy('.glossary-term', {
    theme: 'light-border', // Requires linking the CSS for this theme
    animation: 'shift-away',
    inlinePositioning: true,
    interactive: true,
    arrow:true,
    plugins: [inlinePositioning]
  });
  
});