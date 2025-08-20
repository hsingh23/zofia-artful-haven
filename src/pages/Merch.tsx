import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Star } from "lucide-react";

const Merch = () => {
  const merchItems = [
    {
      id: 1,
      name: "Novus Vinyl Record",
      price: "$35",
      description: "Limited edition vinyl pressing with artistic packaging",
      image: "vinyl-placeholder",
      category: "Music",
      limited: true,
      inStock: true
    },
    {
      id: 2,
      name: "Art Nouveau Poster Set",
      price: "$25",
      description: "Collection of 3 hand-designed posters inspired by the music",
      image: "poster-placeholder",
      category: "Art",
      limited: true,
      inStock: true
    },
    {
      id: 3,
      name: "Zoofia Logo Tee",
      price: "$28",
      description: "Soft organic cotton with hand-drawn logo design",
      image: "tee-placeholder",
      category: "Apparel",
      limited: false,
      inStock: true
    },
    {
      id: 4,
      name: "Creative Process Zine",
      price: "$15",
      description: "Behind-the-scenes look at the artistic process",
      image: "zine-placeholder",
      category: "Print",
      limited: true,
      inStock: false
    }
  ];

  const categories = ["All", "Music", "Art", "Apparel", "Print"];

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-artistic">Merch</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Artistic merchandise crafted with the same attention to detail as the music
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-xl"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Merchandise Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item) => (
              <div key={item.id} className="card-organic group">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-warm rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <ShoppingBag className="w-16 h-16 text-white" />
                  {item.limited && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Limited
                    </Badge>
                  )}
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold">Sold Out</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-display font-bold">{item.name}</h3>
                      <span className="text-lg font-semibold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 btn-artistic" 
                      disabled={!item.inStock}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Sold Out"}
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-xl">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Featured <span className="text-artistic">Collection</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Specially curated items for true supporters
            </p>
          </div>

          <div className="card-organic max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4">
                    Supporter's Bundle
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Get everything in one special package: Novus vinyl, poster set, 
                    exclusive zine, and a personal thank you note. Limited to 100 bundles.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary">$89</span>
                  <span className="text-lg text-muted-foreground line-through">$103</span>
                  <Badge className="bg-accent text-accent-foreground">Save $14</Badge>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span>Only 23 left in stock</span>
                </div>

                <Button className="btn-artistic w-full">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Get Supporter's Bundle
                </Button>
              </div>

              <div className="aspect-square bg-gradient-sunset rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <ShoppingBag className="w-20 h-20 mx-auto mb-4" />
                  <div className="text-lg font-semibold">Complete Collection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                On orders over $50 worldwide
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold">Handcrafted</h3>
              <p className="text-sm text-muted-foreground">
                Each item is carefully prepared with love
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold">Limited Editions</h3>
              <p className="text-sm text-muted-foreground">
                Exclusive designs for dedicated supporters
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Merch;