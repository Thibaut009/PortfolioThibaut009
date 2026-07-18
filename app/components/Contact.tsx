import content from "../data/content.json";

const { contact } = content;
const { form } = contact;

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-tag">{contact.tag}</div>
        <h2 className="section-title">
          {contact.titlePrefix} <span className="grad">{contact.titleHighlight}</span>
        </h2>
        <p className="section-sub">{contact.description}</p>

        <div className="contact-grid">
          <div>
            {contact.items.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-ic">{item.icon}</div>
                <div>
                  <b>{item.label}</b>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
            <div className="socials" style={{ marginTop: 24 }}>
              {contact.socials.map((social) => (
                <a href={social.href} key={social.label}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="form-card">
            <div className="form-row">
              <div>
                <label>{form.nameLabel}</label>
                <input type="text" placeholder={form.namePlaceholder} />
              </div>
              <div>
                <label>{form.emailLabel}</label>
                <input type="email" placeholder={form.emailPlaceholder} />
              </div>
            </div>
            <div className="full">
              <label>{form.subjectLabel}</label>
              <input type="text" placeholder={form.subjectPlaceholder} />
            </div>
            <div>
              <label>{form.messageLabel}</label>
              <textarea placeholder={form.messagePlaceholder} />
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {form.submitLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
