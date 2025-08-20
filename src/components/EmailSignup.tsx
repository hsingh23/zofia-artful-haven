import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Sparkles } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call - replace with actual email service integration
    setTimeout(() => {
      toast({
        title: "Welcome to the journey! ✨",
        description: "You've joined Zoofia's creative community. Expect artistic updates soon!",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="card-organic">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-warm animate-gentle-float">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-display font-bold mb-4">
            Join the <span className="text-artistic">Creative Journey</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 text-lg">
            Get exclusive updates on new music, behind-the-scenes content, 
            and first access to limited merch drops.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-2 border-border/50 rounded-xl focus:border-primary transition-colors"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="btn-artistic whitespace-nowrap"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Joining...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Join List
                </div>
              )}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            No spam, just art. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;