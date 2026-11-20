// Hindi (Devanagari) content. Each export overrides the English one with the same name;
// anything not listed here falls back to English. Links, images and contact numbers are shared.
import * as blogEn from '../blog';
import * as servicesEn from '../services';
import * as aboutEn from '../about';
import * as trustEn from '../trust';
import { founders } from './founders';
import { teachings, services, dailyProgramme, visitorEtiquette } from './general';
import { aboutParagraphs, babaIntro, historyParagraphs, successorsIntro, successorNames, socialServices } from './about';
import { trustIntro, trustHomeSummary, trustObjectives } from './trust';
import { postText } from './blog';

// Merge translated fields onto the English items (same order), keeping slugs, images, icons.
const overlay = (enList, hiList) => enList.map((item, i) => ({ ...item, ...hiList[i] }));

export const content = {
  site: {
    nameHi: 'डेरा बाबा भूमण शाह जी',
    placeHi: 'वाहिगुरू जी का ख़ालसा, वाहिगुरू जी की फ़तह',
    tagline: 'डेरा बाबा भूमण शाह जी — गुरबाणी, नाम सिमरन, सेवा और गुरु के लंगर का स्थान, सबके लिए खुला।',
    intro:
      'श्री गुरु नानक देव जी के दिखाए मार्ग — नाम जपना, किरत करनी और वंड छकना — पर चलते हुए डेरा हर किसी को गुरबाणी कीर्तन, अरदास और गुरु के लंगर के लिए संगत में शामिल होने का निमंत्रण देता है — बिना किसी भेदभाव के।',
    address: '79 ग्रिमा स्ट्रीट, स्कोफील्ड्स NSW 2762',
    addressShort: '79 ग्रिमा स्ट्रीट, स्कोफील्ड्स NSW 2762',
    place: 'स्कोफील्ड्स, सिडनी NSW',
  },
  navLinks: [
    { label: 'मुख्य पृष्ठ', to: '/' },
    {
      label: 'हमारे बारे में',
      children: [
        { label: 'डेरे के बारे में', to: '/about' },
        { label: 'ट्रस्ट के बारे में', to: '/about/baba-bhuman-shah-charitable-trust-sangar-sadhan' },
        { label: 'गुरु की शिक्षाएँ', to: '/about/teachings-of-baba-bhuman-shah-ji' },
      ],
    },
    { label: 'सेवाएँ', to: '/services' },
    { label: 'मीडिया', to: '/gallery' },
    { label: 'ब्लॉग', to: '/blog' },
    { label: 'संपर्क', to: '/contact' },
  ],
  posts: overlay(blogEn.posts, postText),
  teachings,
  services: overlay(servicesEn.services, services),
  dailyProgramme,
  visitorEtiquette,
  aboutParagraphs,
  babaIntro: { ...aboutEn.babaIntro, ...babaIntro },
  historyParagraphs,
  successorsIntro,
  successors: aboutEn.successors.map((s, i) => ({ ...s, name: successorNames[i], years: s.years.replace('Present', 'अब तक') })),
  socialServices: overlay(aboutEn.socialServices, socialServices),
  trustIntro,
  trustHomeSummary,
  trustObjectives: overlay(trustEn.trustObjectives, trustObjectives),
  founders,
};
