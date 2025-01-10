import { motion } from 'framer-motion';
import { Eye, MessageSquare, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: '1',
    title: 'Getting Started with React 18',
    excerpt: 'Learn about the new features in React 18 and how to use them effectively in your applications.',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    author: 'Sarah Chen',
    date: '2024-02-20',
    category: 'React',
    views: '2.3K',
    comments: 24,
    likes: 145,
  },
  {
    id: '2',
    title: 'Understanding TypeScript Generics',
    excerpt: 'Deep dive into TypeScript generics and how they can make your code more reusable and type-safe.',
    coverImage: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80&w=800',
    author: 'Mike Ross',
    date: '2024-02-19',
    category: 'TypeScript',
    views: '1.8K',
    comments: 18,
    likes: 98,
  },
];

export default function Blogs() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
          >
            <Link to={`/blogs/${post.id}`}>
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                  {post.category}
                </div>
                <h2 className="text-xl font-semibold mb-2 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye size={16} />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={16} />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp size={16} />
                      {post.likes}
                    </span>
                  </div>
                  <div>{post.date}</div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}