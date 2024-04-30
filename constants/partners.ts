export interface Partner {
  name: string;
  image: string;
  width: number;
  height: number;
  link: string;
  text: string;
  border: boolean;
}

const PARTNERS = [
  {
    name: 'Blueprint',
    image: '/assets/images/partners-blueprint.png',
    width: 254,
    height: 168,
    link: 'https://www.blueprintforfreespeech.net/',
    text: 'A non-profit promoting the right to freedom of expression and  defending Article 19 of the Universal Declaration of Human Rights.',
    border: false,
  },
  {
    name: 'Mojolab',
    image: '/assets/images/partners-mojolab.png',
    width: 228,
    height: 136,
    link: 'https://mojolab.org/',
    text: 'Making the latest innovations in culture, knowledge, skill, and technology available to communities at low cost, preferably in self-implementable and self-reliant formats.',
    border: true,
  },
  {
    name: 'Hackergram',
    image: '/assets/images/partners-hackergram.png',
    width: 269,
    height: 171,
    link: 'https://hackergram.org/',
    text: 'Building real and virtual community spaces where people can work together to create innovative and sustainable solutions to global problems.',
    border: false,
  },
  {
    name: 'Engagemedia',
    image: '/assets/images/partners-engagemedia.png',
    width: 500,
    height: 300,
    link: 'https://www.engagemedia.org/',
    text: 'A non-profit media, technology, and culture organisation using video, the internet, and open technologies to create social and environmental change.',
    border: false,
  },
  {
    name: 'Equalitie',
    image: '/assets/images/partners-equalitie.png',
    width: 300,
    height: 180,
    link: 'https://equalit.ie/',
    text: 'Developing open and reusable systems with a focus on privacy, resilience, and self-determination.',
    border: true,
  },
  {
    name: 'Coinstop',
    image: '/assets/images/partners-coinstop.png',
    width: 300,
    height: 180,
    link: 'https://coinstop.io/',
    text: 'A business working to protect and secure digital assets, Coinstop is Australia’s largest and longest-serving provider of blockchain and cryptocurrency hardware.',
    border: false,
  },
  {
    name: 'GCA',
    image: '/assets/images/partners-GCA.png',
    width: 225,
    height: 75,
    link: 'https://www.globalcyberalliance.org/',
    text: 'The Global Cyber Alliance is an international, cross-sector effort dedicated to reducing cyber risk and improving our connected world.',
    border: false,
  },
];

export default PARTNERS;
