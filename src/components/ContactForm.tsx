export function ContactForm() {
  return (
    <form className="reference-contact-form" action="mailto:admin@pooptopia.dog" method="post" encType="text/plain">
      <p className="reference-contact-form-note">
        Fields marked with an asterisk (<span className="required-field-mark">*</span>) are required.
      </p>
      <div className="reference-contact-form-fields">
        <label>
          <span>Name: <span className="required-field-mark">*</span></span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Email: <span className="required-field-mark">*</span></span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone: <span className="required-field-mark">*</span></span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
        <label>
          <span>Message: <span className="required-field-mark">*</span></span>
          <textarea name="message" rows={4} required />
        </label>
      </div>
      <button type="submit">Send message</button>
    </form>
  );
}
