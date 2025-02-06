import styles from './ContactStyles.module.css';
import { MessageCircle } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
       {/* Phone/Text Icon */}
       <a href="sms:+1234567890" className={styles.phoneIcon}>
        <MessageCircle size={32} color="teal" />
      </a>
      <form action="https://api.web3forms.com/submit"
      method = "POST">
         {/* Required hidden input for API key */}
         <input type="hidden" name="access_key" value="d1496de9-23fa-4fc9-b174-60013bff9397" />

        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
