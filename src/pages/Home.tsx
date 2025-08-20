import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowDown } from "lucide-react";
import BandcampEmbed from "@/components/BandcampEmbed";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Mobile-First Grid Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 min-h-screen">
        {/* Hero Content - Mobile: Full width, Desktop: Left half */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-12 sm:py-20 lg:py-0 order-1">
          <div className="space-y-8 sm:space-y-12 max-w-2xl mx-auto lg:mx-0">
            {/* Circular Graphic Element - Responsive sizing */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-warm opacity-80 animate-gentle-float mx-auto lg:mx-0"></div>
            
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold leading-tight">
                Meet <span className="text-artistic">Zoofia</span>
              </h1>
              
              <div className="w-12 sm:w-16 h-1 bg-gradient-warm mx-auto lg:mx-0"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Mobile: Second, Desktop: Right half */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-12 sm:py-20 lg:py-0 bg-gradient-subtle order-2">
          <div className="space-y-6 sm:space-y-8 max-w-lg mx-auto lg:mx-0">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center lg:text-left">
              Creating soundscapes that blend organic textures with digital innovation. 
              Experience the intersection of creativity, technology, and artistic expression.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="btn-artistic w-full sm:w-auto">
                <Link to="/music">
                  Listen Now
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="rounded-xl border-2 hover:border-primary transition-colors w-full sm:w-auto">
                <a href="https://zofiaa.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Bandcamp
                </a>
              </Button>
            </div>

            {/* Bandcamp Embed - Responsive */}
            <div className="pt-4 sm:pt-8">
              <BandcampEmbed 
                albumId="2424352134" 
                height={200}
                className="w-full max-w-sm mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden lg:flex fixed bottom-8 right-8 text-xs text-muted-foreground tracking-wider items-center space-x-2">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-4 h-4" />
      </div>

      {/* Secondary Content - Mobile-First */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-display font-bold tracking-wide">MUSIC</h3>
              <p className="text-muted-foreground leading-relaxed">
                Latest album exploring new sonic territories with artistic expression.
              </p>
              <Link to="/music" className="link-flowing text-primary inline-block">
                Explore Music →
              </Link>
            </div>

            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-display font-bold tracking-wide">MERCH</h3>
              <p className="text-muted-foreground leading-relaxed">
                Artistic merchandise and limited editions for collectors.
              </p>
              <Link to="/merch" className="link-flowing text-primary inline-block">
                Browse Collection →
              </Link>
            </div>

            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-display font-bold tracking-wide">BLOG</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thoughts, process, and insights from the creative journey.
              </p>
              <Link to="/blog" className="link-flowing text-primary inline-block">
                Read Stories →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;