import React, { useState } from "react";
import { Send, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // EmailJS 配置
    const serviceId = 'service_gi3spvz';
    const templateId = 'template_iw7mpl6';
    const publicKey = 'ZPeRu79kfbU0DqXNA';

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email, // EmailJS 常用的回覆地址參數
        user_email: formData.email, // 額外的 email 參數
        subject: formData.subject,
        message: formData.message,
        to_name: 'Chen-Han Chin',
      };

      // 調試輸出
      console.log('Sending email with parameters:', templateParams);

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Contact me if you have any questions or want to work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-black mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "hank9185@icloud.com",
                    href: "mailto:hank9185@icloud.com"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+886 905 900 112",
                    href: "tel:+886905900112"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Taoyuan, Taiwan",
                    href: null
                  }
                ].map(({ icon: Icon, title, value, href }) => (
                  <div key={title} className="flex items-center gap-4">
                    <div className="glass-morphism w-12 h-12 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-black text-sm">{title}</p>
                      {href ? (
                        <a 
                          href={href}
                          className="text-gray-500 font-medium hover:text-gray-700 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-500 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-black mb-6">Why Work With Me?</h3>
              <div className="space-y-4 text-black">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Enthusiastic and eager to learn new skills while continuously improving myself.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Clear communication during development, in both English and Chinese.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Plenty of experience with deep learning, especially NLP and algorithm development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-gray-700" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-black mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-morphism rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-black mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-morphism rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-black mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-morphism rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-black mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-morphism rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* 狀態訊息 */}
              {status === "success" && (
                <div className="mb-4 p-4 glass-morphism rounded-xl text-green-400 text-center">
                  Message sent successfully! I'll reply you once I receive your message ~~
                </div>
              )}
              
              {status === "error" && (
                <div className="mb-4 p-4 glass-morphism rounded-xl text-red-400 text-center">
                  Failed to send message. Why not just email me directly or call me?
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}