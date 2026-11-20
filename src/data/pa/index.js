// Punjabi (Gurmukhi) content. Each export overrides the English one with the same name;
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
const overlay = (enList, paList) => enList.map((item, i) => ({ ...item, ...paList[i] }));

export const content = {
  site: {
    tagline: 'ਡੇਰਾ ਬਾਬਾ ਭੂਮਣ ਸ਼ਾਹ ਜੀ — ਗੁਰਬਾਣੀ, ਨਾਮ ਸਿਮਰਨ, ਸੇਵਾ ਅਤੇ ਗੁਰੂ ਕੇ ਲੰਗਰ ਦਾ ਅਸਥਾਨ, ਸਭ ਲਈ ਖੁੱਲ੍ਹਾ।',
    intro:
      'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਦਰਸਾਏ ਮਾਰਗ — ਨਾਮ ਜਪਣਾ, ਕਿਰਤ ਕਰਨੀ ਅਤੇ ਵੰਡ ਛਕਣਾ — ’ਤੇ ਚੱਲਦਿਆਂ ਡੇਰਾ ਹਰ ਕਿਸੇ ਨੂੰ ਗੁਰਬਾਣੀ ਕੀਰਤਨ, ਅਰਦਾਸ ਅਤੇ ਗੁਰੂ ਕੇ ਲੰਗਰ ਲਈ ਸੰਗਤ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਦਾ ਸੱਦਾ ਦਿੰਦਾ ਹੈ — ਬਿਨਾਂ ਕਿਸੇ ਭੇਦਭਾਵ ਦੇ।',
    address: '79 ਗ੍ਰਿਮਾ ਸਟ੍ਰੀਟ, ਸਕੋਫੀਲਡਜ਼ NSW 2762',
    addressShort: '79 ਗ੍ਰਿਮਾ ਸਟ੍ਰੀਟ, ਸਕੋਫੀਲਡਜ਼ NSW 2762',
    place: 'ਸਕੋਫੀਲਡਜ਼, ਸਿਡਨੀ NSW',
  },
  navLinks: [
    { label: 'ਮੁੱਖ ਪੰਨਾ', to: '/' },
    {
      label: 'ਸਾਡੇ ਬਾਰੇ',
      children: [
        { label: 'ਡੇਰੇ ਬਾਰੇ', to: '/about' },
        { label: 'ਟਰੱਸਟ ਬਾਰੇ', to: '/about/baba-bhuman-shah-charitable-trust-sangar-sadhan' },
        { label: 'ਗੁਰੂ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ', to: '/about/teachings-of-baba-bhuman-shah-ji' },
      ],
    },
    { label: 'ਸੇਵਾਵਾਂ', to: '/services' },
    { label: 'ਮੀਡੀਆ', to: '/gallery' },
    { label: 'ਬਲੌਗ', to: '/blog' },
    { label: 'ਸੰਪਰਕ', to: '/contact' },
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
  successors: aboutEn.successors.map((s, i) => ({ ...s, name: successorNames[i], years: s.years.replace('Present', 'ਹੁਣ ਤੱਕ') })),
  socialServices: overlay(aboutEn.socialServices, socialServices),
  trustIntro,
  trustHomeSummary,
  trustObjectives: overlay(trustEn.trustObjectives, trustObjectives),
  founders,
};
