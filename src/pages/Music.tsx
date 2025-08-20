import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Download } from "lucide-react";
import BandcampEmbed from "@/components/BandcampEmbed";

const Music = () => {
  const albums = [
    {
      title: "Novus",
      year: "2024",
      description: "A journey through experimental soundscapes and innovative musical territories.",
      bandcampUrl: "https://zofiaa.bandcamp.com/album/novus",
      albumId: "novus",
      tracks: [
        "Opening Ritual",
        "Digital Dreams",
        "Organic Synthesis",
        "Temporal Flux",
        "Closing Circle"
      ]
    }
  ];

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-artistic">Music</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of human creativity and digital expression
          </p>
        </div>
      </section>

      {/* Featured Album */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {albums.map((album) => (
            <div key={album.title} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold">
                      {album.title}
                    </h2>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {album.year}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {album.description}
                  </p>
                </div>

                {/* Track List */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold">Track List</h3>
                  <div className="space-y-2">
                    {album.tracks.map((track, index) => (
                      <div key={track} className="flex items-center gap-3 p-3 rounded-xl hover:bg-card/50 transition-colors group">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center font-medium">
                          {index + 1}
                        </span>
                        <span className="flex-1">{track}</span>
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-artistic">
                    <a href={album.bandcampUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Listen on Bandcamp
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="rounded-xl border-2">
                    <Download className="w-5 h-5 mr-2" />
                    Digital Download
                  </Button>
                </div>
              </div>

              {/* Bandcamp Embed */}
              <div className="animate-gentle-float">
                <BandcampEmbed 
                  albumId={album.albumId}
                  height={400}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Releases */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              More <span className="text-artistic">Releases</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the complete musical journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for future releases */}
            <div className="card-organic text-center">
              <div className="w-32 h-32 bg-gradient-warm rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">New experimental works in progress</p>
              <Button variant="outline" disabled className="rounded-xl">
                Stay Tuned
              </Button>
            </div>

            <div className="card-organic text-center">
              <div className="w-32 h-32 bg-gradient-amber rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Play className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Singles</h3>
              <p className="text-muted-foreground mb-4">Standalone experimental pieces</p>
              <Button variant="outline" disabled className="rounded-xl">
                Coming Soon
              </Button>
            </div>

            <div className="card-organic text-center">
              <div className="w-32 h-32 bg-gradient-sunset rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Collaborations</h3>
              <p className="text-muted-foreground mb-4">Joint creative explorations</p>
              <Button variant="outline" disabled className="rounded-xl">
                In Development
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bandcamp Integration CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-organic">
            <h2 className="text-3xl font-display font-bold mb-6">
              Support <span className="text-artistic">Independent Music</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Purchase directly from Bandcamp to support the artist and get high-quality downloads
            </p>
            <Button asChild className="btn-artistic">
              <a href="https://zofiaa.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Zoofia on Bandcamp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Music;