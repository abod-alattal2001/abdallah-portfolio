import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

function Contact() {

  const [name, setName] = useState<string>('');
  const [contactInfo, setContactInfo] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [contactError, setContactError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameEmpty = name.trim() === '';
    const isContactEmpty = contactInfo.trim() === '';
    const isMessageEmpty = message.trim() === '';

    setNameError(isNameEmpty);
    setContactError(isContactEmpty);
    setMessageError(isMessageEmpty);

    if (isNameEmpty || isContactEmpty || isMessageEmpty) return;

    setLoading(true);

    emailjs
      .send(
        "service_l43x6bu",
        "template_ufimir9",
        {
          from_name: name,
          contact: contactInfo,
          message: message,
          time: new Date().toLocaleString(),
        },
        "yb-yy6Wdq51kOIXNm"
      )
      .then(() => {

        setLoading(false);
        setSuccess(true);

        setName('');
        setContactInfo('');
        setMessage('');

        setTimeout(() => {
          setSuccess(false);
        }, 4000);

      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div id="contact">
      <div className="items-container">

        <div className="contact_wrapper">

          <h1>Let’s Build Intelligent Systems Together</h1>

          <p>
            Interested in AI-powered robotics, industrial automation, or advanced
            system integration? I am open to collaborations, full-time roles,
            and research-driven opportunities.
          </p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >

            <div className='form-flex'>

              <TextField
                required
                label="Full Name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Name is required" : ""}
              />

              <TextField
                required
                label="Email or Phone"
                placeholder="your@email.com"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                error={contactError}
                helperText={contactError ? "Contact information is required" : ""}
              />

            </div>

            <TextField
              required
              label="Project / Collaboration Details"
              placeholder="Describe your AI, robotics, or automation project..."
              multiline
              rows={8}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter project details" : ""}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={loading}
            >

              {loading ? "Sending..." : "Send Inquiry"}

            </Button>

            {success && (
              <p className="success-message">
                ✓ Message sent successfully. I will respond soon.
              </p>
            )}

          </Box>

        </div>

      </div>
    </div>
  );
}

export default Contact;