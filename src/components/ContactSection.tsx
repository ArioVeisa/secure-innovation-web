import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // ✅ Fungsi untuk validasi email
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // ✅ Fungsi untuk update state saat user ngetik
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Fungsi untuk submit form ke Telegram
  const escapeMarkdownV2 = (text: string) => {
    return text.replace(/([_*[\]()~`>#+-=|{}.!])/g, "\\$1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: !formData.email
        ? "Email is required"
        : !validateEmail(formData.email)
        ? "Invalid email format"
        : "",
      message: formData.message ? "" : "Message is required",
    };

    setErrors(newErrors);
    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    setIsSubmitting(true);

    const token = "7338043983:AAGWMLxympj6tgFH81GTvngYfs9RTC1Lvlg";
    const chatId = "6568629821";
    const text = `📝 *New Contact Form Message*\n\n👤 *Name:* ${escapeMarkdownV2(
      formData.name
    )}\n📧 *Email:* ${escapeMarkdownV2(
      formData.email
    )}\n📌 *Subject:* ${escapeMarkdownV2(
      formData.subject
    )}\n💬 *Message:* ${escapeMarkdownV2(formData.message)}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "MarkdownV2", // ✅ Gunakan MarkdownV2
          }),
        }
      );

      const data = await res.json();

      if (!data.ok) {
        throw new Error(`Telegram API error: ${data.description}`);
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error("Gagal kirim ke Telegram:", err);
      alert("Gagal mengirim pesan. Coba lagi nanti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@minetech.io",
      link: "mailto:info@minetech.io",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Silicon Valley, CA, USA",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[30%] w-96 h-96 bg-minetech-navy/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-minetech-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-minetech-cyan font-medium mb-3 reveal">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
            Get In Touch
          </h2>
          <p className="text-minetech-gray max-w-3xl mx-auto reveal">
            Have a project in mind or questions about our services? We'd love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 reveal">
            <div className="bg-gradient-to-b from-minetech-navy to-minetech-dark border border-minetech-cyan/10 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">
                Let's Discuss Your Project
              </h3>
              <p className="text-minetech-gray mb-8">
                Fill out the form and our team will get back to you within 24
                hours. We're ready to help you transform your digital presence.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-minetech-cyan/10 text-minetech-cyan">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-minetech-light hover:text-minetech-cyan transition-colors"
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-minetech-navy to-minetech-dark border border-minetech-cyan/10 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-minetech-cyan/30 flex items-center justify-center text-minetech-light hover:bg-minetech-cyan/10 hover:text-minetech-cyan transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-minetech-cyan/30 flex items-center justify-center text-minetech-light hover:bg-minetech-cyan/10 hover:text-minetech-cyan transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-minetech-cyan/30 flex items-center justify-center text-minetech-light hover:bg-minetech-cyan/10 hover:text-minetech-cyan transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-minetech-cyan/30 flex items-center justify-center text-minetech-light hover:bg-minetech-cyan/10 hover:text-minetech-cyan transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-gradient-to-b from-minetech-navy to-minetech-dark border border-minetech-cyan/10 rounded-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-minetech-light mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-minetech-dark/50 border ${
                      errors.name ? "border-red-500" : "border-minetech-navy"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-minetech-cyan/50 text-minetech-light`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-minetech-light mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-minetech-dark/50 border ${
                      errors.email ? "border-red-500" : "border-minetech-navy"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-minetech-cyan/50 text-minetech-light`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-minetech-light mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-minetech-dark/50 border border-minetech-navy rounded-md focus:outline-none focus:ring-2 focus:ring-minetech-cyan/50 text-minetech-light"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-minetech-light mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-minetech-dark/50 border ${
                      errors.message ? "border-red-500" : "border-minetech-navy"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-minetech-cyan/50 text-minetech-light`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 ${
                      isSubmitting
                        ? "bg-minetech-navy cursor-not-allowed"
                        : "bg-minetech-cyan hover:bg-minetech-cyan/90"
                    } text-minetech-dark font-medium rounded-md transition-colors flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-minetech-dark"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>

                  {submitSuccess && (
                    <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 text-center">
                      Your message has been sent successfully! We'll get back to
                      you soon.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
