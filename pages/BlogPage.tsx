
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
    <Link to={`#`}>
      <img className="h-56 w-full object-cover" src={post.imageUrl} alt={post.title} />
    </Link>
    <div className="p-6">
      <div className="mb-3">
        {post.tags.map(tag => (
          <span key={tag} className="inline-block bg-secondary-default text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        <Link to={`#`} className="hover:text-primary transition-colors">{post.title}</Link>
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        By {post.author} on {post.date}
      </p>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link to={`#`} className="font-semibold text-primary hover:text-primary-dark">Read More &rarr;</Link>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Blog</h1>
          <p className="mt-4 text-xl text-gray-600">Educational articles, tips, and updates from the AcademicSorcess team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
