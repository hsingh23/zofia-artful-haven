import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowDown } from "lucide-react";
import BandcampEmbed from "@/components/BandcampEmbed";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 min-h-screen">
        {/* Left Content Area */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0">
          <div className="space-y-12 max-w-2xl">
            {/* Circular Graphic Element */}
            <div className="w-32 h-32 rounded-full bg-gradient-warm opacity-80 animate-gentle-float"></div>
            
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-display font-bold leading-tight">
                Meet <span className="text-artistic">Zoofia</span>
              </h1>
              
              <div className="w-16 h-1 bg-gradient-warm"></div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-0 bg-gradient-subtle">
          <div className="space-y-8 max-w-lg">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Zoofia redefines musical workflows, empowering you to scale creative, protect 
              what matters, and launch faster—unlocking your <span className="text-primary font-semibold">revenue potential</span>.
            </p>
            
            <div className="space-y-4">
              <Button asChild className="btn-artistic">
                <Link to="/music">
                  Listen Now
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="rounded-xl border-2 hover:border-primary transition-colors ml-4">
                <a href="https://zofiaa.bandcamp.com/album/novus" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Bandcamp
                </a>
              </Button>
            </div>

            {/* Bandcamp Embed */}
            <div className="pt-8">
              <BandcampEmbed 
                albumId="novus" 
                height={300}
                className="max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 right-8 text-xs text-muted-foreground tracking-wider flex items-center space-x-2">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-4 h-4" />
      </div>

      {/* Secondary Content */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold tracking-wide">MUSIC</h3>
              <p className="text-muted-foreground leading-relaxed">
                Latest album exploring new sonic territories with artistic expression.
              </p>
              <Link to="/music" className="link-flowing text-primary">
                Explore Music →
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold tracking-wide">MERCH</h3>
              <p className="text-muted-foreground leading-relaxed">
                Artistic merchandise and limited editions for collectors.
              </p>
              <Link to="/merch" className="link-flowing text-primary">
                Browse Collection →
              </Link>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold tracking-wide">BLOG</h3>
              <p className="text-muted-foreground leading-relaxed">
                Thoughts, process, and insights from the creative journey.
              </p>
              <Link to="/blog" className="link-flowing text-primary">
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