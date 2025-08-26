import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, Shield } from "lucide-react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with better formatting
      const subject = encodeURIComponent(`New Manufacturing Partnership Inquiry - ${formData.company}`);
      const body = encodeURIComponent(`Dear Precilayer Team,

I am reaching out regarding manufacturing partnership opportunities.

=== CONTACT DETAILS ===
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Role: ${formData.role || 'Not specified'}

=== PROJECT DETAILS ===
${formData.message}

---
This inquiry was submitted via the Precilayer website contact form.

Best regards,
${formData.name}`);
      
      const mailtoLink = `mailto:support@precilayer.com?subject=${subject}&body=${body}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        role: '',
        message: ''
      });
      
      toast({
        title: "Email Client Opened",
        description: "Your email client has opened with the message. Please send it to complete your inquiry.",
        variant: "default"
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try emailing support@precilayer.com directly.",
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
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center pulse-glow">
                  <Mail className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:support@precilayer.com" className="text-cyber-400 hover:text-cyber-300 transition-colors">
                    support@precilayer.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="response-time">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center pulse-glow">
                  <Clock className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="confidentiality">
                <div className="w-12 h-12 bg-cyber-400/20 rounded-lg flex items-center justify-center pulse-glow">
                  <Shield className="text-cyber-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Confidentiality</h3>
                  <p className="text-gray-400">NDA protection guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-reveal"
          >
            <div className="bg-space-900 p-8 rounded-xl border border-gray-700" data-testid="contact-form">
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
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white"
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
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white"
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
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white"
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
                      className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white"
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="role">Role</label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                    <SelectTrigger className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white" data-testid="select-role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-space-800 border-gray-600">
                      <SelectItem value="founder">Founder/CEO</SelectItem>
                      <SelectItem value="cto">CTO/Head of Engineering</SelectItem>
                      <SelectItem value="engineer">Design Engineer</SelectItem>
                      <SelectItem value="mechanical">Mechanical Engineer</SelectItem>
                      <SelectItem value="product">Product Manager</SelectItem>
                      <SelectItem value="procurement">Procurement/Sourcing</SelectItem>
                      <SelectItem value="operations">Operations Manager</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing Engineer</SelectItem>
                      <SelectItem value="quality">Quality Assurance</SelectItem>
                      <SelectItem value="rd">R&D Manager</SelectItem>
                      <SelectItem value="business">Business Development</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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
                    className="bg-space-800 border-gray-600 focus:border-cyber-400 text-white resize-none"
                    placeholder="Tell us about your project requirements..."
                    data-testid="textarea-message"
                  />
                </div>
                
                {/* Cloudflare Turnstile */}
                <div className="flex justify-center">
                  <div 
                    className="cf-turnstile" 
                    data-sitekey="0x4AAAAAAABkMYinukE_rfUn"
                    data-theme="dark"
                    data-size="normal"
                  ></div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyber-400 text-space-900 py-4 hover:bg-cyber-500 transition-all transform hover:scale-105 hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-submit"
                >
                  {isSubmitting ? 'Opening Email...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
