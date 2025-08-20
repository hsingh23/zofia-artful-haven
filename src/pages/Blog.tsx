import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, Tag, ArrowRight, Edit } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Blog posts with actual content
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Sound Design: Creating Organic Textures",
      excerpt: "Exploring how natural sounds and digital manipulation create unique sonic landscapes in modern music production. From field recordings to digital processing, discover the creative process behind organic sound design.",
      content: `# The Art of Sound Design: Creating Organic Textures

Sound design is more than just technical manipulation—it's about breathing life into digital spaces through organic textures that feel alive and breathing.

## Finding Inspiration in Nature

The foundation of organic sound design begins with nature itself. I spend countless hours capturing field recordings: rustling leaves, flowing water, distant thunder. These recordings become the building blocks for something entirely new.

## Digital Alchemy

Using tools like Ableton Live and various plugins, I transform these natural sounds through granular synthesis, spectral processing, and layered modulation. The goal isn't to recreate nature, but to capture its essence and reimagine it in digital form.

## The Creative Process

Each texture tells a story. A simple recording of wind through trees might become the foundation for an entire atmospheric piece, processed and layered until it evolves into something completely unexpected yet familiar.

The magic happens in the space between the organic and the digital—where technology serves creativity rather than constraining it.`,
      author: "zoofia",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Process",
      tags: ["sound design", "production", "creativity"],
      slug: "art-of-sound-design"
    },
    {
      id: 2,
      title: "Behind the Scenes: Novus Album Creation",
      excerpt: "A deep dive into the creative process behind the Novus album, from initial concepts to final mastering. Discover the techniques, inspirations, and challenges that shaped this artistic journey.",
      content: `# Behind the Scenes: Novus Album Creation

Creating Novus was a journey through uncharted sonic territories, blending experimental techniques with deeply personal artistic expression.

## Conceptual Foundation

The album began with a simple question: How can digital tools capture the organic complexity of human emotion? This led to months of experimentation with field recordings, synthesized textures, and found sounds.

## Production Techniques

### Layered Textures
Each track builds upon carefully crafted layers of:
- Field recordings from urban and natural environments
- Analog synthesizer patches processed through digital effects
- Granular synthesis techniques for texture evolution
- Careful use of space and silence as compositional elements

### The Recording Process

Most sessions happened between midnight and 4 AM, when the world is quietest and creativity flows most freely. I recorded everything from subway ambience to morning bird songs, weaving them into the digital tapestry.

## Challenges and Breakthroughs

The biggest challenge was maintaining emotional authenticity while pushing technical boundaries. The breakthrough came when I stopped trying to make "perfect" sounds and embraced the beautiful imperfections that make music human.

Listen to the full album on [Bandcamp](https://zofiaa.bandcamp.com/album/novus).`,
      author: "zoofia",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Music",
      tags: ["novus", "album", "behind-the-scenes"],
      slug: "novus-album-creation"
    },
    {
      id: 3,
      title: "Art Nouveau Influence in Modern Digital Art",
      excerpt: "How the flowing, organic forms of Art Nouveau continue to inspire contemporary digital artists and musicians. Exploring the intersection of historical artistic movements and modern creative technology.",
      content: `# Art Nouveau Influence in Modern Digital Art

The flowing, organic lines of Art Nouveau from the late 19th century continue to influence how we approach digital creativity today. There's something timeless about these natural forms that transcends medium and era.

## Historical Context

Art Nouveau emerged as a reaction against industrialization, embracing natural forms, flowing lines, and organic patterns. Artists like Alphonse Mucha and Gustav Klimt created works that celebrated the beauty of the natural world.

## Digital Renaissance

Today's digital tools allow us to explore these same principles in new ways:

### Visual Design
- Flowing gradients that mimic natural color transitions
- Organic typography that breathes and moves
- Interface elements inspired by plant forms and natural patterns

### Musical Applications
In my own work, I apply Art Nouveau principles to sound design:
- Flowing melodic lines that twist and evolve like vines
- Harmonic progressions that mirror natural growth patterns
- Textural elements that embrace imperfection and organic variation

## Technology as Nature

The irony isn't lost on me—using digital technology to recreate the organic resistance to industrialization. But perhaps that's the point: technology becomes most powerful when it serves our human need for beauty and natural connection.

## Practical Applications

When designing this website, I drew heavily from Art Nouveau palettes and flowing forms. The warm oranges and earth tones, the organic gradients, and the handcrafted typography all pay homage to this influential movement.

The goal is creating digital experiences that feel human, warm, and alive—just as Art Nouveau artists sought to do over a century ago.`,
      author: "zoofia",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Art",
      tags: ["art nouveau", "inspiration", "visual art"],
      slug: "art-nouveau-influence"
    }
  ];

  const categories = ["All", "Process", "Music", "Art", "Personal"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-artistic">Blog</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, processes, and insights from the creative journey
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-xl border-2"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-xl"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Admin Edit Button */}
            <Button variant="outline" asChild className="rounded-xl">
              <Link to="/blog/edit">
                <Edit className="w-4 h-4 mr-2" />
                Edit Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-display font-semibold mb-4">No posts found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card-organic group">
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <Badge variant="outline" className="w-fit">
                      {post.category}
                    </Badge>

                    {/* Title */}
                    <h2 className="text-2xl font-display font-bold leading-tight group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`} className="link-flowing">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-lg text-xs"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="pt-4">
                      <Button variant="ghost" asChild className="p-0 h-auto font-medium">
                        <Link to={`/blog/${post.slug}`}>
                          Read full article
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-organic">
            <h2 className="text-3xl font-display font-bold mb-6">
              Never Miss a <span className="text-artistic">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get notified when new blog posts are published
            </p>
            <Button className="btn-artistic">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;