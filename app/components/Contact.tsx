export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">
          Me <span className="grad">contacter</span>
        </h2>
        <p className="section-sub">
          Une idée de projet, une opportunité ou juste envie d&apos;échanger ? N&apos;hésitez
          pas à me contacter.
        </p>

        <div className="contact-grid">
          <div>
            <div className="contact-item">
              <div className="contact-ic">✉️</div>
              <div>
                <b>Email</b>
                <span>alex.dev@exemple.com</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-ic">📞</div>
              <div>
                <b>Téléphone</b>
                <span>+33 6 12 34 56 78</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-ic">📍</div>
              <div>
                <b>Localisation</b>
                <span>France</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-ic">🟢</div>
              <div>
                <b>Disponibilité</b>
                <span>Disponible pour travailler</span>
              </div>
            </div>
            <div className="socials" style={{ marginTop: 24 }}>
              <a href="#">in</a>
              <a href="#">gh</a>
              <a href="#">tw</a>
              <a href="#">@</a>
            </div>
          </div>

          <div className="form-card">
            <div className="form-row">
              <div>
                <label>Nom</label>
                <input type="text" placeholder="Votre nom" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="votre@email.com" />
              </div>
            </div>
            <div className="full">
              <label>Sujet</label>
              <input type="text" placeholder="Sujet de votre message" />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Votre message..." />
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Envoyer le message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
