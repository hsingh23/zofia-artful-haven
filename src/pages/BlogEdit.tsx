import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Save, Plus, Edit, Github, Key, Eye } from "lucide-react";

const BlogEdit = () => {
  const [githubToken, setGithubToken] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  // Mock blog posts for editing
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Art of Sound Design: Creating Organic Textures",
      slug: "art-of-sound-design",
      category: "Process",
      status: "published"
    },
    {
      id: 2,
      title: "Behind the Scenes: Novus Album Creation", 
      slug: "novus-album-creation",
      category: "Music",
      status: "published"
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    slug: "",
    category: "Process",
    content: ""
  });

  const handleAuth = () => {
    if (githubToken && githubUrl) {
      setIsAuthenticated(true);
      toast({
        title: "Authentication successful! 🎉",
        description: "Connected to GitHub repository for blog management.",
      });
    } else {
      toast({
        title: "Missing credentials",
        description: "Please provide both GitHub token and repository URL.",
        variant: "destructive"
      });
    }
  };

  const handleSavePost = () => {
    if (newPost.title && newPost.content) {
      // In a real implementation, this would push to GitHub
      toast({
        title: "Post saved! ✨",
        description: "Blog post has been saved to the repository.",
      });
      setNewPost({ title: "", slug: "", category: "Process", content: "" });
    }
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  if (!isAuthenticated) {
    return (
      <main className="pt-16">
        <section className="py-20 px-4 min-h-screen flex items-center justify-center">
          <div className="max-w-2xl mx-auto">
            <div className="card-organic text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                  <Key className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-display font-bold mb-4">
                  Blog <span className="text-artistic">Management</span>
                </h1>
                <p className="text-muted-foreground">
                  Connect your GitHub repository to manage blog posts with MDX format
                </p>
              </div>

              <div className="space-y-6 text-left">
                <div>
                  <Label htmlFor="github-token" className="text-sm font-medium">
                    GitHub Personal Access Token
                  </Label>
                  <Input
                    id="github-token"
                    type="password"
                    placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                    value={githubToken}
                    onChange={(e) => setGithubToken(e.target.value)}
                    className="mt-2 border-2 rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Token needs repository write access
                  </p>
                </div>

                <div>
                  <Label htmlFor="github-url" className="text-sm font-medium">
                    GitHub Repository URL
                  </Label>
                  <Input
                    id="github-url"
                    type="url"
                    placeholder="https://github.com/username/blog-posts"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="mt-2 border-2 rounded-xl"
                  />
                </div>

                <Button onClick={handleAuth} className="btn-artistic w-full">
                  <Github className="w-5 h-5 mr-2" />
                  Connect to GitHub
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-xl text-left">
                <h3 className="font-semibold mb-2">Setup Instructions:</h3>
                <ol className="text-sm text-muted-foreground space-y-1">
                  <li>1. Create a GitHub personal access token</li>
                  <li>2. Ensure it has repository write permissions</li>
                  <li>3. Create a repository for your blog posts</li>
                  <li>4. Organize posts in /posts/ folder as .mdx files</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-8 px-4 bg-gradient-subtle border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold">
              Blog <span className="text-artistic">Editor</span>
            </h1>
            <p className="text-muted-foreground">
              Create and manage MDX blog posts
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Github className="w-4 h-4" />
            Connected to GitHub
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Existing Posts */}
          <div className="lg:col-span-1">
            <div className="card-organic">
              <h2 className="text-xl font-display font-semibold mb-6">Existing Posts</h2>
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="p-4 border border-border/50 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium line-clamp-2">{post.title}</h3>
                      <Badge variant="outline" className="text-xs ml-2">
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">/{post.slug}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Post Editor */}
          <div className="lg:col-span-2">
            <div className="card-organic">
              <h2 className="text-xl font-display font-semibold mb-6">Create New Post</h2>
              
              <div className="space-y-6">
                {/* Post Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="post-title">Title</Label>
                    <Input
                      id="post-title"
                      value={newPost.title}
                      onChange={(e) => {
                        setNewPost({
                          ...newPost,
                          title: e.target.value,
                          slug: generateSlug(e.target.value)
                        });
                      }}
                      placeholder="Enter post title..."
                      className="mt-2 border-2 rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="post-slug">Slug</Label>
                    <Input
                      id="post-slug"
                      value={newPost.slug}
                      onChange={(e) => setNewPost({...newPost, slug: e.target.value})}
                      placeholder="url-friendly-slug"
                      className="mt-2 border-2 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="post-category">Category</Label>
                  <select
                    id="post-category"
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    className="mt-2 w-full p-3 border-2 border-input rounded-xl bg-background"
                  >
                    <option value="Process">Process</option>
                    <option value="Music">Music</option>
                    <option value="Art">Art</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>

                {/* MDX Content Editor */}
                <div>
                  <Label htmlFor="post-content">Content (MDX)</Label>
                  <Textarea
                    id="post-content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    placeholder="# Your Post Title

Write your post content in MDX format...

## Section Header

Your content here with **bold** and *italic* text.

```javascript
// Code blocks are supported
const example = 'hello world';
```

- Bullet points
- Work too"
                    className="mt-2 min-h-[400px] border-2 rounded-xl font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Supports MDX format with frontmatter, React components, and markdown
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <Button onClick={handleSavePost} className="btn-artistic">
                    <Save className="w-4 h-4 mr-2" />
                    Save Post
                  </Button>
                  <Button variant="outline" className="rounded-xl">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogEdit;
