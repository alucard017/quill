import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');

  // Mock data for the blog post
  const post = {
    title: 'Getting Started with React 18',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    content: `
      React 18 introduces several exciting new features that improve the performance and capabilities of React applications.
      In this post, we'll explore the most important changes and how to use them effectively.
      
      ## Automatic Batching
      
      One of the most significant improvements in React 18 is automatic batching. This feature helps reduce unnecessary re-renders
      and improve application performance.
      
      ## Concurrent Features
      
      React 18 introduces new concurrent features that allow React to prepare multiple versions of the UI at the same time.
      This enables new capabilities that help improve both real and perceived performance of apps.
    `,
    author: 'Sarah Chen',
    date: '2024-02-20',
    likes: 145,
    comments: [
      { id: 1, author: 'Mike Ross', text: 'Great article! Very helpful.', date: '2024-02-21' },
      { id: 2, author: 'Emma Wilson', text: 'Thanks for sharing!', date: '2024-02-21' },
    ],
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setComment('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4 dark:text-white">{post.title}</h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            {post.author[0]}
          </div>
          <div>
            <div className="font-medium dark:text-white">{post.author}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1 ${
              liked ? 'text-purple-600' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <ThumbsUp size={20} />
            <span>{post.likes + (liked ? 1 : 0)}</span>
          </button>
          <button className="text-gray-500 dark:text-gray-400">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="dark:text-gray-300">{paragraph}</p>
        ))}
      </div>

      <div className="border-t dark:border-gray-700 pt-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Comments ({post.comments.length})
        </h2>
        <form onSubmit={handleComment} className="mb-6">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          {post.comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium dark:text-white">{comment.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {comment.date}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}