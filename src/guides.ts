import { GuideType } from "@react-admin/ra-tour-guide";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const guides: { [id: string]: GuideType } = {
  "ra-markdown": {
    before: async ({ notify, redirect }) => {
      notify("Taking you to the product page");
      redirect("/products");
      await timeout(1000); // would be so awesome if redirect was awaitable!
    },
    steps: [
      {
        target: `[data-tour-id='grid-line']:nth-child(${getRandomInt(1, 5)})`,
        event: "hover",
        content:
          "This is a poster, one of the products our shop is selling, let's go to its details",
        joyrideProps: {
          styles: {
            beacon: {
              marginTop: -100,
            },
          },
        },
        after: ({ target, redirect }) => {
          const productUrl = target.getAttribute("href").slice(1);
          redirect(productUrl);
        },
      },
      {
        target: "[data-tour-id='description-tab']",
        content: "The markdown editor is in the description tab",
        after: ({ target }) => {
          target.click();
        },
      },
      {
        target: ".rc-md-editor ",
        content: "Right here. Try playing with its markdown, make it bold, add headlines!",
      },
      {
        target: "[data-testid=product-edit-preview]",
        content: "Parsed markdown can then be displayed in a preview or wherever you want.",
      },
    ],
  },
  "ra-preferences": {
    steps: [
      {
        target: "button[aria-label='Toggle Theme']",
        disableBeacon: true,
        content:
          "ra-preferences comes with a lot of built-in modules, like this theme switcher. Try it: it works!",
      },
      {
        target: "button[aria-label='Toggle Theme'] + button",
        content: "Or this language switcher...",
        after: ({ redirect }) => {
          redirect("/customers");
        },
      },
      {
        target: "button[aria-controls=user-preference-menu]",
        content: "Even more advanced ones like this list customization tool.",
        disableBeacon: false,
        after: ({ target }) => {
          target.click();
        },
      },
      {
        target: "#user-preference-menu .MuiPaper-root",
        content:
          "Where you can select how you want the list to be displayed, or the information you want to see.",
        joyrideProps: {
          styles: {
            options: {
              zIndex: 10000,
            },
          },
        },
        after: () => {
          const menuOverlay: HTMLElement | null = document.querySelector(
            "body > .MuiPopover-root div[aria-hidden=true]"
          );
          if (!menuOverlay) {
            return;
          }
          menuOverlay.click();
        },
      },
      {
        before: ({ setTourPreferences, state }) => {
          setTourPreferences(state);
        },
        target: "body",
        content:
          "It exposes simple hooks so that you can actually save whatever you want, too. For instance, the state of this particular step. Try to reload the page!",
        joyrideProps: {
          styles: {
            options: {
              arrowColor: "transparent",
            },
          },
        },
        after: ({ setTourPreferences }) => {
          setTourPreferences({});
        },
      },
    ],
  },
};

export default guides;
