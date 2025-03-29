
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, User } from 'lucide-react';
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, author, category, image, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-charity-green text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-charity-green transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <Link to={`/blog/${slug}`}>
          <Button variant="link" className="p-0 text-charity-green hover:text-charity-green-light">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

const BlogPreviewSection = () => {
  const blogPosts = [
    {
      title: "Clean Water Initiative Reaches 10,000 People in Rural Communities",
      excerpt: "Our recent water project has successfully provided access to clean water for over 10,000 individuals in remote villages across Uganda and Kenya.",
      date: "October 7, 2023",
      author: "Jane Doe",
      category: "Water",
      image: "/placeholder.svg",
      slug: "clean-water-initiative"
    },
    {
      title: "Education Program Helps 500 Children Return to School",
      excerpt: "Through our scholarship and school supply programs, 500 children who had dropped out due to financial constraints are now back in classrooms.",
      date: "September 15, 2023",
      author: "John Smith",
      category: "Education",
      image: "/placeholder.svg",
      slug: "education-program-success"
    },
    {
      title: "Community Health Workers Trained to Serve Remote Areas",
      excerpt: "Our healthcare initiative has trained 50 community health workers who now provide basic medical services in areas with limited healthcare access.",
      date: "August 22, 2023",
      author: "Michael Johnson",
      category: "Healthcare",
      image: "/placeholder.svg",
      slug: "community-health-workers"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">LATEST NEWS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest projects, success stories, and how your contributions are making a real difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              category={post.category}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/blog">
            <Button className="btn-charity">View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
