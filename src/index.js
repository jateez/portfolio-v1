import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


document.addEventListener('DOMContentLoaded', function () {
    // Get the developer-role span
    const developerRoleSpan = document.getElementById('developer-role');
  
    // Check if the developer role span exists
    if (developerRoleSpan) {
      // Get the initial text content
      const initialText = developerRoleSpan.textContent.trim();
  
      // Define your array of keywords
      const keywords = ["Software Engineer.", "Fullstack Developer.", "Back-End Developer."];
  
      // Create a typewriter instance
      const typewriter = new Typewriter(developerRoleSpan, {
        loop: true,
      });
  
      // If the initial text does not contain any of the keywords, add them one by one
      if (!keywords.some(keyword => initialText.includes(keyword))) {
        keywords.forEach((keyword, index) => {
          const isLastKeyword = index === keywords.length - 1;
  
          typewriter
            .typeString(keyword)
            .pauseFor(500) // Adjust pause duration as needed
            .deleteAll()
            .callFunction(() => {
              // Stop the loop after displaying the last keyword
              if (isLastKeyword) {
                typewriter.stop();
              }
            })
            .start();
        });
      } else {
        // If any of the keywords is already present, start the typewriter without adding them
        typewriter.start();
      }
    }
  });