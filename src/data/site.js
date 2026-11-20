// Central site information — edit here and it updates everywhere.
export const site = {
  name: 'Dera Baba Bhuman Shah Ji',
  nameHi: 'ਡੇਰਾ ਬਾਬਾ ਭੂਮਣ ਸ਼ਾਹ ਜੀ',
  placeHi: 'ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ',
  place: 'Schofields, Sydney NSW',
  tagline:
    'Dera Baba Bhuman Shah Ji — a place of Gurbani, Naam Simran, Sewa and Guru Ka Langar, open to all.',
  intro:
    'Following the path of Sri Guru Nanak Dev Ji — Naam Japna, Kirat Karni and Vand Chakna — the Dera welcomes everyone to join the Sangat for Gurbani Kirtan, Ardaas and Guru Ka Langar, open to all without any discrimination.',
  address: '79 Grima Street, Schofields NSW 2762',
  addressShort: '79 Grima Street, Schofields NSW 2762',
  email: 'bhumanshah@gmail.com',
  mapQuery: '79 Grima Street, Schofields NSW 2762, Australia',
  established: '29-05-1970',
  trustRegistration: 'Registered under Income-Tax Act 1961, Regn. No. 7-B dated 30-9-75',
  social: {
    facebook: 'https://www.facebook.com/bababhumanshahofficial/',
    twitter: 'https://twitter.com/BabaBhumanShah',
    youtube: 'https://www.youtube.com/c/DeraBabaBhumanShahJiMain',
    youtubeChannel: 'https://www.youtube.com/channel/UCLCUt7hOsjZcPzwAMzRwpow',
    featuredVideo: 'https://www.youtube.com/watch?v=mY5yCqwWpJE',
    featuredVideoId: 'mY5yCqwWpJE',
  },
  // Next event shown in the countdown on the home page
  nextEvent: {
    title: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ',
    date: '2026-11-24T00:00:00+11:00',
    label: '24.11.2026',
  },
};

export const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'About Dera', to: '/about' },
      { label: 'About Trust', to: '/about/baba-bhuman-shah-charitable-trust-sangar-sadhan' },
      { label: 'Teachings of Guru', to: '/about/teachings-of-baba-bhuman-shah-ji' },
    ],
  },
  { label: 'Services', to: '/services' },
  { label: 'Media', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];
