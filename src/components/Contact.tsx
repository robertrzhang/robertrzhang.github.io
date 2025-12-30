import { Container } from "./Contact.styles";
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import validator from 'validator';

export function Contact(){
  const [state, handleSubmit] = useForm('YOUR_FORM_ID'); // Replace with your Formspree form ID
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: 'bottom-left',
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <Container id="contact">
        <header>
          <h2>Contact</h2>
          <p>Ready to get started on your project? </p>
          <p>Contact me now for a consultation.</p>
        </header>
        <div className="contacts">
          <div>
            <a href="mailto:robert@example.com">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a> 
            <a href="mailto:robert@example.com">robert@example.com</a>
          </div>
        </div>
        <div style={{marginTop: "3rem", textAlign: "center"}}>
          <h3>Thanks for getting in touch!</h3>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Back to the top
          </button>
        </div>
        <ToastContainer />
      </Container>
    );
  }

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:robert@example.com">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a> 
          <a href="mailto:robert@example.com">robert@example.com</a>
        </div>
      </div>
      <div className="form-container">
        <h2>Get in touch using the form</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            id="email"
            type="email"
            name="email"
            onChange={(e) => {
              verifyEmail(e.target.value)
            }}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            required
            placeholder="Send a message to get started."
            id="message"
            name="message"
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting || !validEmail || !message}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </Container>
  )
}

export default Contact
