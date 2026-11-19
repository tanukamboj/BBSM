import { useState } from 'react';
import { site } from '../../data/site';
import Icon from './Icon';
import { useLang } from '../../i18n/LanguageContext';

// Keys of the UI dictionary; the email subject always uses the English label.
const topics = ['topicGeneral', 'topicEvent', 'topicDonation'];
const topicEn = { topicGeneral: 'General Query', topicEvent: 'Event Information', topicDonation: 'Donation' };

// No backend: the form composes an email in the visitor's mail app.
export default function ContactForm() {
  const { t } = useLang();
  const [topic, setTopic] = useState(topics[0]);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`[${topicEn[topic]}] Website enquiry`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-form card" onSubmit={submit}>
      <div className="tabs" role="tablist" aria-label={t('enquiryType')}>
        {topics.map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={topic === k}
            className={`tabs__btn ${topic === k ? 'is-active' : ''}`}
            onClick={() => setTopic(k)}
          >
            {t(k)}
          </button>
        ))}
      </div>

      <div className="form-grid">
        <label>
          <span>{t('fullName')}</span>
          <input name="name" required value={form.name} onChange={update} placeholder={t('yourName')} />
        </label>
        <label>
          <span>{t('phone')}</span>
          <input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+61" />
        </label>
        <label className="form-grid__full">
          <span>{t('emailReq')}</span>
          <input name="email" type="email" required value={form.email} onChange={update} placeholder="you@example.com" />
        </label>
        <label className="form-grid__full">
          <span>{t('messageReq')}</span>
          <textarea name="message" rows="5" required value={form.message} onChange={update} placeholder={t('messagePlaceholder')} />
        </label>
      </div>

      <button type="submit" className="btn btn--primary btn--lg">
        <Icon name="mail" size={16} /> {t('sendBtn')}
      </button>
      <p className="form-note">
        <Icon name="info" size={14} /> {t('formNote', { email: site.email })}
        {sent && t('formNoteSent')}
      </p>
    </form>
  );
}
