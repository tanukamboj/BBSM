import { useState } from 'react';
import { site } from '../../data/site';
import Icon from './Icon';

const topics = ['General Query', 'Event Information', 'Donation'];

// No backend: the form composes an email in the visitor's mail app.
export default function ContactForm() {
  const [topic, setTopic] = useState(topics[0]);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`[${topic}] Website enquiry`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-form card" onSubmit={submit}>
      <div className="tabs" role="tablist" aria-label="Enquiry type">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={topic === t}
            className={`tabs__btn ${topic === t ? 'is-active' : ''}`}
            onClick={() => setTopic(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="form-grid">
        <label>
          <span>Full name *</span>
          <input name="name" required value={form.name} onChange={update} placeholder="Your name" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91" />
        </label>
        <label className="form-grid__full">
          <span>Email *</span>
          <input name="email" type="email" required value={form.email} onChange={update} placeholder="you@example.com" />
        </label>
        <label className="form-grid__full">
          <span>Message *</span>
          <textarea name="message" rows="5" required value={form.message} onChange={update} placeholder={`Write your ${topic.toLowerCase()} here…`} />
        </label>
      </div>

      <button type="submit" className="btn btn--primary btn--lg">
        <Icon name="mail" size={16} /> Send Message
      </button>
      <p className="form-note">
        <Icon name="info" size={14} /> This opens your email app with the message ready to send to {site.email}.
        {sent && ' If nothing opened, please email or call us directly.'}
      </p>
    </form>
  );
}
