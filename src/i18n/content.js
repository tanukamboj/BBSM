// Returns all page content (data files) in the current language.
// English lives in src/data/*.js; Punjabi overrides in src/data/pa/*.js, Hindi in src/data/hi/*.js.
import { useLang } from './LanguageContext';
import * as site from '../data/site';
import * as blog from '../data/blog';
import * as teachings from '../data/teachings';
import * as services from '../data/services';
import * as about from '../data/about';
import * as trust from '../data/trust';
import * as founders from '../data/founders';
import * as pa from '../data/pa';
import * as hi from '../data/hi';

const en = {
  site: site.site,
  navLinks: site.navLinks,
  posts: blog.posts,
  teachings: teachings.teachings,
  services: services.services,
  dailyProgramme: services.dailyProgramme,
  visitorEtiquette: services.visitorEtiquette,
  aboutParagraphs: about.aboutParagraphs,
  babaIntro: about.babaIntro,
  historyParagraphs: about.historyParagraphs,
  successorsIntro: about.successorsIntro,
  successors: about.successors,
  socialServices: about.socialServices,
  trustIntro: trust.trustIntro,
  trustHomeSummary: trust.trustHomeSummary,
  trustObjectives: trust.trustObjectives,
  founders: founders.founders,
};

// Other languages start from English (so links, images, phone numbers stay shared) and apply overrides.
const withOverrides = (o) => ({ ...en, ...o, site: { ...en.site, ...o.site } });
const byLang = { en, pa: withOverrides(pa.content), hi: withOverrides(hi.content) };

export function useContent() {
  const { lang } = useLang();
  return byLang[lang] ?? en;
}
