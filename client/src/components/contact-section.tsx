import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<any>(null);

  const { toast } = useToast();

  useEffect(() => {
    // Only load Turnstile on production, not on localhost
    const isDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    
    if (isDev) {
      // Skip Turnstile on development
      return;
    }

    // Load Cloudflare Turnstile script only on production
    if ((window as any).turnstile) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.onload = () => {
      // Render widget after script loads
      if (turnstileRef.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.render(turnstileRef.current, {
            sitekey: '0x4AAAAAACXpiXPgQedJSx48',
            theme: 'dark',
            size: 'normal',
          });
        } catch (err) {
          console.warn('Turnstile render failed:', err);
        }
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get Turnstile token if available (production only)
      const isDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
      let captchaToken = '';
      
      if (!isDev && (window as any).turnstile) {
        captchaToken = (window as any).turnstile?.getResponse?.(turnstileRef.current) || '';
        if (!captchaToken) {
          throw new Error('Please complete the captcha verification.');
        }
      }

      // Format email message for admin
      const emailMessage = `CONTACT INFORMATION
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Role/Title: ${formData.role ? formData.role.charAt(0).toUpperCase() + formData.role.slice(1).replace(/([A-Z])/g, ' $1') : 'Not specified'}

MESSAGE:
${formData.message}`;

      const backendUrl = import.meta.env.VITE_MAKE_BACKEND_URL;
      const webhookSecret = import.meta.env.VITE_MAKE_WEBHOOK_SECRET_KEY;

      if (!backendUrl) {
        throw new Error('Backend API URL is not configured. Please contact support directly.');
      }

      if (!webhookSecret) {
        throw new Error('Webhook secret key is not configured. Please contact support directly.');
      }

      const webhookUrl = `${backendUrl}/user/webhook-contact?secret=${encodeURIComponent(webhookSecret)}`;

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          'Organisation/Company': formData.company,
          Message: emailMessage,
          captchaToken: captchaToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to submit contact form');
      }

      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        message: ''
      });

      // Reset captcha
      if ((window as any).turnstile?.reset) {
        try {
          (window as any).turnstile.reset(turnstileRef.current);
        } catch (err) {
          console.warn('Turnstile reset failed:', err);
        }
      }

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.",
        variant: "default"
      });

    } catch (error) {
      console.error('Contact form submission error:', error);
      // Reset captcha on error
      if ((window as any).turnstile?.reset) {
        try {
          (window as any).turnstile.reset(turnstileRef.current);
        } catch (err) {
          console.warn('Turnstile reset failed:', err);
        }
      }
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Unable to submit your message at this time. Please email support@precilayer.com directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-space-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6" data-testid="contact-title">
              Ready to <span className="gradient-text">Partner</span>?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Let's discuss how Precilayer can transform your manufacturing challenges
              into competitive advantages. Our experts are ready to analyze your requirements
              and provide tailored solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                  <Mail className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:support@precilayer.com" className="text-cyber-400 hover:text-cyber-300 transition-colors">
                    support@precilayer.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                  <Phone className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a href="tel:+919930903006" className="text-cyber-400 hover:text-cyber-300 transition-colors">
                    +91 99309 03006
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-testid="response-time">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                  <Clock className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-testid="confidentiality">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center icon-glow">
                  <Shield className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Confidentiality</h3>
                  <p className="text-gray-400">NDA protection guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div >

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="bg-space-900 p-8 rounded-xl border border-gray-700 hover:border-cyber-400 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/60 hover:shadow-2xl" data-testid="contact-form">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name *</label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white placeholder:text-gray-400"
                      placeholder="Your full name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Work Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white placeholder:text-gray-400"
                      placeholder="you@company.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="company">Company *</label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white placeholder:text-gray-400"
                      placeholder="Company name"
                      data-testid="input-company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone (Optional)</label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white placeholder:text-gray-400"
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="role">Role</label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                    <SelectTrigger className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white placeholder:text-gray-400" data-testid="select-role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-space-800 border-gray-600 text-white">
                      <SelectItem value="founder" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Founder/CEO</SelectItem>
                      <SelectItem value="cto" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">CTO/Head of Engineering</SelectItem>
                      <SelectItem value="engineer" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Design Engineer</SelectItem>
                      <SelectItem value="mechanical" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Mechanical Engineer</SelectItem>
                      <SelectItem value="product" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Product Manager</SelectItem>
                      <SelectItem value="procurement" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Procurement/Sourcing</SelectItem>
                      <SelectItem value="operations" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Operations Manager</SelectItem>
                      <SelectItem value="manufacturing" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Manufacturing Engineer</SelectItem>
                      <SelectItem value="quality" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Quality Assurance</SelectItem>
                      <SelectItem value="rd" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">R&D Manager</SelectItem>
                      <SelectItem value="business" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Business Development</SelectItem>
                      <SelectItem value="startup" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Startup</SelectItem>
                      <SelectItem value="consultant" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Consultant</SelectItem>
                      <SelectItem value="other" className="text-white hover:bg-cyber-400 hover:text-black data-[highlighted]:bg-cyber-400 data-[highlighted]:text-black focus:bg-cyber-400 focus:text-black">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message *</label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white placeholder:text-gray-400 resize-none"
                    placeholder="Tell us about your project requirements..."
                    data-testid="textarea-message"
                  />
                </div>

                {/* Cloudflare Turnstile */}
                <div className="flex justify-center">
                  <div ref={turnstileRef}></div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyber-400 text-space-900 py-4 hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-submit"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div >
      </div >
    </section >
  );
}
