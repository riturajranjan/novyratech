import { BlogContent } from '@/components/sections/blog-content';

export const metadata = {
  title: 'Blog',
  description: 'Insights on building software, deploying AI, and running teams at scale.',
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogContent />
    </div>
  );
}
