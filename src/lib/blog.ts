export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'fontainebleau-beginners-guide',
    title: 'Fontainebleau for Beginners: Which Circuit to Start On',
    date: '2025-10-01',
    excerpt: 'The Forest has 77 sectors and 3,000 problems. Here is where to start if it is your first time.',
  },
  {
    slug: 'verdon-gear-list',
    title: 'The Verdon Gorge Gear List: What You Actually Need',
    date: '2025-09-15',
    excerpt: 'Two 50m ropes are non-negotiable. Here is the complete packing list for a Verdon multi-pitch day.',
  },
  {
    slug: 'ceuse-skin-guide',
    title: 'Skin Management at Céüse: How to Climb 8 Days Straight',
    date: '2025-08-01',
    excerpt: 'The approach earns you the route. But sharp Hautes-Alpes limestone will destroy your fingertips by day 3 if you ignore skin care.',
  },
]
