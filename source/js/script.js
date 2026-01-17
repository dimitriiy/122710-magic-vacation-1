// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";

// init modules
load();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

function load() {
  window.addEventListener(`load`, () => {
    document.body.classList.add(`loaded`);
  });
}

class AccentTypographyBuild {
  constructor(elementSelector, duration, minDelay, maxDelay) {
    this.element = elementSelector;
    this.duration = duration;
    this.minDelay = minDelay;
    this.maxDelay = maxDelay;

    this.classForActivate = `accent-typography--active`;
    this.prepareText();
  }

  prepareText() {
    const textContent = this.element.textContent.trim();
    const words = textContent.split(/\s/);
    const content = words.reduce((acc, word) => {
      const row = document.createElement(`span`);
      row.classList.add(`accent-row`);

      word.split(``).forEach((letter) => {
        const span = document.createElement(`span`);
        span.classList.add(`accent-item`);
        console.log(this.getDelay());
        span.style.animationDelay = this.getDelay();
        span.textContent = letter;

        row.appendChild(span);
      });

      acc.appendChild(row);

      return acc;
    }, document.createDocumentFragment());
    this.element.innerHTML = ``;
    this.element.appendChild(content);
  }

  getDelay() {
    return `${getRandomFloat(this.minDelay, this.maxDelay)}s`;
  }
}

function getRandomFloat(min = 0, max = 0.4) {
  return Math.random() * (max - min) + min;
}

new AccentTypographyBuild(document.querySelector(`.intro__title`));
