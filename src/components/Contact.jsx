import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    const to = 'andreipanganiban82@gmail.com';
    const subject = `Message from ${name}`;
    const body = `From: ${name}\nEmail: ${email}\n\n${message}`;

    const gmailURL =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=' + encodeURIComponent(to) +
      '&su=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    window.open(gmailURL, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="contact-container">
        <div className="contact-icon">
          <h1>Get in Touch</h1>
          
          <div className="contact-item">
            <img src="/icons/email.png" alt="Email" />
            <span>andreipanganiban82@gmail.com</span>
          </div>

          <div className="contact-item">
            <img src="/icons/phone.png" alt="Phone" />
            <span>0998-958-7442</span>
          </div>

          <div className="contact-socmed">
            <a href="https://github.com/LenardAndrei" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/lenard-panganiban-045458397/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/andrei.panganiban.98" target="_blank" rel="noopener noreferrer">
              <img src="/icons/fb.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/lnrdpngnbn_/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/ig.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="contact-message">
          <h1>Message Me</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
