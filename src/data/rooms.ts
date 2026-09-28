export type Room = {
  slug: string;
  title: string;
  /** Shown as the room's headline and on its lobby card — the hook. */
  question: string;
  teaser: string;
  image: string;
};

/** Exhibit rooms in suggested visiting order. The lobby map and room navigation both read this list. */
export const rooms: Room[] = [
  {
    slug: "cloth",
    title: "The Cloth",
    question: "What exactly are we looking at?",
    teaser: "Switch between normal light, photographic negative and ultraviolet, and find the wounds yourself.",
    image: "/images/shroud-fullbody-photographic-negative.png",
  },
  {
    slug: "wounds",
    title: "The Wounds",
    question: "Do the injuries match a Roman crucifixion?",
    teaser: "Compare each wound with Roman practice, and with how medieval artists imagined it.",
    image: "/images/medieval-painting-crucifixtion.jpg",
  },
  {
    slug: "blood",
    title: "The Blood",
    question: "Is it real blood, and why is it still red?",
    teaser: "Reveal hidden serum halos under UV light and follow the chemistry.",
    image: "/images/shroud-blood-face-closeup.png",
  },
  {
    slug: "image",
    title: "The Image Mystery",
    question: "How did the image get onto the cloth?",
    teaser: "Put four competing theories on trial against six key observations.",
    image: "/images/shroud-vp8-3d-render.jpg",
  },
  {
    slug: "dating",
    title: "How Old Is It?",
    question: "Medieval creation or ancient burial cloth?",
    teaser: "Weigh radiocarbon, historical records and material tests on one timeline.",
    image: "/images/shroud-c14-sample-1988.jpg",
  },
  {
    slug: "sudarium",
    title: "The Face Cloth",
    question: "Does a second cloth in Spain tell the same story?",
    teaser: "Compare the bloodstains of the Sudarium of Oviedo with the Shroud's face.",
    image: "/images/sudarium-full-cloth.jpg",
  },
  {
    slug: "faith",
    title: "Faith & Reason",
    question: "What does the Church actually say?",
    teaser: "Why the Church neither confirms nor denies authenticity, and still encourages study.",
    image: "/images/shroud_negative.jpg",
  },
];
