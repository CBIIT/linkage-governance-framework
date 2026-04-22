require('@uswds/uswds');
import tippy, {inlinePositioning} from 'tippy.js';


tippy('.glossary-term', {
    theme: 'light-border', // Requires linking the CSS for this theme
    animation: 'shift-away',
    inlinePositioning: true,
    interactive: true,
    arrow:true,
    plugins: [inlinePositioning]
  });
