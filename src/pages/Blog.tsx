
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Calendar, User, Search } from 'lucide-react';
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Water', 'Education', 'Healthcare', 'Community', 'Events'];
  
  const blogPosts: BlogPost[] = [
    {
      title: "Clean Water Initiative Reaches 10,000 People in Rural Communities",
      excerpt: "Our recent water project has successfully provided access to clean water for over 10,000 individuals in remote villages across Uganda and Kenya. The initiative included drilling new wells, repairing existing infrastructure, and educating communities about water conservation and hygiene practices.",
      date: "October 7, 2023",
      author: "Jane Doe",
      category: "Water",
      image: "/placeholder.svg",
      slug: "clean-water-initiative"
    },
    {
      title: "Education Program Helps 500 Children Return to School",
      excerpt: "Through our scholarship and school supply programs, 500 children who had dropped out due to financial constraints are now back in classrooms. This initiative targets the most vulnerable families in both urban and rural areas.",
      date: "September 15, 2023",
      author: "John Smith",
      category: "Education",
      image: "/placeholder.svg",
      slug: "education-program-success"
    },
    {
      title: "Community Health Workers Trained to Serve Remote Areas",
      excerpt: "Our healthcare initiative has trained 50 community health workers who now provide basic medical services in areas with limited healthcare access. These workers are equipped with medical kits and mobile technology to consult with doctors remotely.",
      date: "August 22, 2023",
      author: "Michael Johnson",
      category: "Healthcare",
      image: "/placeholder.svg",
      slug: "community-health-workers"
    },
    {
      title: "Annual Charity Gala Raises Record Funds for School Building Project",
      excerpt: "This year's charity gala exceeded all expectations, raising over $150,000 for our school building project. Thanks to the generosity of our supporters, we will be able to construct three new classrooms in underserved communities.",
      date: "July 30, 2023",
      author: "Sarah Williams",
      category: "Events",
      image: "/placeholder.svg",
      slug: "annual-charity-gala"
    },
    {
      title: "Community Garden Initiative Improves Nutrition for Local Families",
      excerpt: "Our community garden program has established 15 new gardens that are now providing fresh produce to over 100 families. The program also offers training in sustainable farming practices and nutrition education.",
      date: "July 12, 2023",
      author: "Robert Chen",
      category: "Community",
      image: "/placeholder.svg",
      slug: "community-garden-initiative"
    },
    {
      title: "New Partnership Expands Healthcare Access in Rural Regions",
      excerpt: "We've partnered with Local Medical Center to bring mobile health clinics to remote villages. This partnership will provide regular check-ups, vaccinations, and basic treatments to communities with limited transportation options.",
      date: "June 28, 2023",
      author: "Emily Thompson",
      category: "Healthcare",
      image: "/placeholder.svg",
      slug: "healthcare-partnership"
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="relative h-80 bg-charity-dark flex items-center">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: `url(${'/placeholder.svg'})`,
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Stories of impact, updates on our projects, and insights into the challenges we're addressing.
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="md:w-3/4">
                <div className="mb-10">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="pl-10 py-6"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-charity-green text-white text-xs font-bold px-3 py-1 rounded-full">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-charity-green transition-colors">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <div className="flex items-center mr-4">
                              <Calendar size={14} className="mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <User size={14} className="mr-1" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                          
                          <Link to={`/blog/${post.slug}`}>
                            <Button variant="link" className="p-0 text-charity-green hover:text-charity-green-light">
                              Read More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 py-8 text-center">
                      <p className="text-gray-600">No blog posts found matching your criteria.</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className={`w-full text-left py-2 px-3 rounded-md transition ${
                            activeCategory === category 
                              ? 'bg-charity-green text-white' 
                              : 'hover:bg-charity-light'
                          }`}
                        >
                          {category}
                          {category !== 'All' && (
                            <span className="float-right">
                              {blogPosts.filter(post => post.category === category).length}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-4 pb-2 border-b">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <li key={index} className="flex items-start pb-4 border-b last:border-b-0 last:pb-0">
                        <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 hover:text-charity-green transition-colors">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h4>
                          <div className="text-xs text-gray-500 mt-1">{post.date}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
