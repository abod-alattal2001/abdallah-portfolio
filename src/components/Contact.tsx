import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'; // تم استدعاء MenuItem للقائمة المنسدلة
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState<string>('');
  const [contactType, setContactType] = useState<string>('email'); // حالة جديدة لنوع التواصل
  const [contactInfo, setContactInfo] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [nameErrorText, setNameErrorText] = useState<string>(''); // نص خطأ الاسم

  const [contactError, setContactError] = useState<boolean>(false);
  const [contactErrorText, setContactErrorText] = useState<string>(''); // نص خطأ التواصل

  const [messageError, setMessageError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  // دوال التحقق باستخدام Regex
  const validateEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };
  const validateName = (name: string) => {
    return /^[A-Za-z\s]{3,}$/.test(name);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[0-9]{8,15}$/.test(phone); // يقبل أرقام بطول 8-15 وقد يبدأ بـ +
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    // 1. التحقق من أن الاسم يحتوي على 3 أحرف على الأقل
    if (!validateName(name)) {
      setNameError(true);
      setNameErrorText("Name must contain only letters and be at least 3 characters");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorText("");
    }

    // 2. التحقق من حقل التواصل بناءً على الاختيار
    if (contactInfo.trim() === '') {
      setContactError(true);
      setContactErrorText("Contact information is required");
      isValid = false;
    } else if (contactType === 'email' && !validateEmail(contactInfo)) {
      setContactError(true);
      setContactErrorText("Please enter a valid email address");
      isValid = false;
    } else if (contactType === 'phone' && !validatePhone(contactInfo)) {
      setContactError(true);
      setContactErrorText("Please enter a valid phone number");
      isValid = false;
    } else {
      setContactError(false);
      setContactErrorText("");
    }

    // 3. التحقق من الرسالة
if (message.trim().length < 10) {
  setMessageError(true);
  isValid = false;
} else {
      setMessageError(false);
    }

    // إيقاف الإرسال إذا كان هناك أي خطأ
    if (!isValid) return;

    setLoading(true);

    emailjs
      .send(
        "service_l43x6bu",
        "template_ufimir9",
        {
          from_name: name,
          contact: `${contactType.toUpperCase()}: ${contactInfo}`, // لتوضيح نوع التواصل في الإيميل المستلم
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
                helperText={nameError ? nameErrorText : ""}
              />

              {/* حاوية جديدة تضم قائمة الاختيار وحقل الإدخال */}
              <div className="contact-input-group">
                <TextField
                  select
                  label="Type"
                  value={contactType}
                  onChange={(e) => {
                    setContactType(e.target.value);
                    setContactInfo(''); // تفريغ الحقل عند تغيير النوع
                    setContactError(false);
                  }}
                  className="contact-type-select"
                >
                  <MenuItem value="email">Email</MenuItem>
                  <MenuItem value="phone">Phone</MenuItem>
                </TextField>

                <TextField
                  required
                  label={contactType === 'email' ? "Email Address" : "Phone Number"}
                  placeholder={contactType === 'email' ? "your@email.com" : "+1234567890"}
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  error={contactError}
                  helperText={contactError ? contactErrorText : ""}
                  className="contact-info-input"
                />
              </div>
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
