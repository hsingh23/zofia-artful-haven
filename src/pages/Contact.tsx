import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, ExternalLink, Send } from "lucide-react";
import EmailSignup from "@/components/EmailSignup";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 🎵",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  const socialLinks = [
    {
      name: "Bandcamp",
      url: "https://zofiaa.bandcamp.com/album/novus",
      description: "Listen to music and support directly"
    },
    {
      name: "Email",
      url: "mailto:hello@zzzoofia.com",
      description: "hello@zzzoofia.com"
    }
  ];

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-artistic">Contact</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and create something beautiful together
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-organic">
            <h2 className="text-3xl font-display font-bold mb-6">
              Send a <span className="text-artistic">Message</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="mt-2 border-2 rounded-xl"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 border-2 rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  className="mt-2 border-2 rounded-xl"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  className="mt-2 min-h-[150px] border-2 rounded-xl"
                  placeholder="Tell me about your project, collaboration idea, or just say hello..."
                />
              </div>

              <Button type="submit" className="btn-artistic w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-organic">
              <h3 className="text-2xl font-display font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@zzzoofia.com</p>
                    <p className="text-sm text-muted-foreground">
                      For collaborations, bookings, and general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24-48 hours</p>
                    <p className="text-sm text-muted-foreground">
                      Creating takes time, but communication shouldn't wait
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-organic">
              <h3 className="text-2xl font-display font-bold mb-6">Connect Elsewhere</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Collaboration Info */}
            <div className="card-organic">
              <h3 className="text-2xl font-display font-bold mb-6">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in collaborating with other artists, designers, 
                and creators. Whether you want to work on music, visual art, or 
                interdisciplinary projects, let's explore what we can create together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-artistic">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold mb-2">Do you take commissions?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! I love creating custom pieces. Reach out with your vision and budget.
                </p>
              </div>
              
              <div>
                <h3 className="font-display font-semibold mb-2">Can I license your music?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely. Contact me for licensing inquiries for films, podcasts, or other projects.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold mb-2">Do you offer mixing/mastering?</h3>
                <p className="text-muted-foreground text-sm">
                  Currently focusing on my own work, but open to special projects.
                </p>
              </div>
              
              <div>
                <h3 className="font-display font-semibold mb-2">How can I support your work?</h3>
                <p className="text-muted-foreground text-sm">
                  Purchase music directly from Bandcamp, buy merch, or share with friends!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;