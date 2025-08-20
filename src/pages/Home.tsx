import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Disc, ShoppingBag, BookOpen, ExternalLink } from "lucide-react";
import BandcampEmbed from "@/components/BandcampEmbed";
import EmailSignup from "@/components/EmailSignup";

const Home = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-display font-bold">
                <span className="text-artistic">zoofia</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-warm rounded-full"></div>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Creating <span className="text-accent font-semibold">artistic music</span> that 
              blends human intuition with creative expression. 
              Where <span className="text-primary font-semibold">sound meets soul</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-artistic">
                <Link to="/music">
                  <Play className="w-5 h-5 mr-2" />
                  Listen Now
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="rounded-xl border-2 hover:border-primary transition-colors">
                <a href="https://zofiaa.bandcamp.com/album/novus" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Bandcamp
                </a>
              </Button>
            </div>
          </div>
          
          <div className="animate-gentle-float">
            <BandcampEmbed 
              albumId="novus" 
              height={400}
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Music Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Latest <span className="text-artistic">Sounds</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the newest musical expressions from the creative laboratory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Album Card */}
            <div className="card-organic group">
              <div className="aspect-square bg-gradient-warm rounded-2xl mb-6 flex items-center justify-center">
                <Disc className="w-16 h-16 text-white animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Novus</h3>
              <p className="text-muted-foreground mb-4">Latest album exploring new sonic territories</p>
              <Button variant="outline" asChild className="w-full rounded-xl">
                <a href="https://zofiaa.bandcamp.com/album/novus" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Listen on Bandcamp
                </a>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="card-organic">
              <div className="aspect-square bg-gradient-amber rounded-2xl mb-6 flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Merch</h3>
              <p className="text-muted-foreground mb-4">Artistic merchandise and limited editions</p>
              <Button variant="outline" asChild className="w-full rounded-xl">
                <Link to="/merch">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Browse Collection
                </Link>
              </Button>
            </div>

            <div className="card-organic">
              <div className="aspect-square bg-gradient-sunset rounded-2xl mb-6 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Creative Blog</h3>
              <p className="text-muted-foreground mb-4">Thoughts, process, and artistic journey</p>
              <Button variant="outline" asChild className="w-full rounded-xl">
                <Link to="/blog">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />

      {/* Artist Statement */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-display italic text-foreground/80 leading-relaxed">
            "We are architects of the unseen. A laboratory where human intuition 
            meets machine intelligence, forging a new era of creative expression."
          </blockquote>
          <cite className="block mt-8 text-lg text-muted-foreground">— zoofia</cite>
        </div>
      </section>
    </main>
  );
};

export default Home;