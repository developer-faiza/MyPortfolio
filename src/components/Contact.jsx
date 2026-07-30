import React, { useState ,useRef} from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm('service_7d4w0ph', 'template_fdnatpb', form.current, 'e-iX2aHyMa-KB14Eu')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        alert('Failed to Send!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

          <p className="text-gray-300 mb-12 text-lg">
            Have a project idea or freelance opportunity? Let's work together.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none
                focus:border-purple-500
                "
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
              />
            </div>

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 mb-6"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-pink-500 hover:scale-105 transition duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
