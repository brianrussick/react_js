import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    { slug: 'getting-started-with-nextjs', 
    title: 'Getting Started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is the React framework for production - it makes building full-stack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2022-02-10' },
    { slug: 'getting-started-with-nextjs2', 
    title: 'Getting Started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is the React framework for production - it makes building full-stack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2022-02-10' },
    { slug: 'getting-started-with-nextjs3', 
    title: 'Getting Started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is the React framework for production - it makes building full-stack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2022-02-10' },
    { slug: 'getting-started-with-nextjs4', 
    title: 'Getting Started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'NextJS is the React framework for production - it makes building full-stack React apps and sites a breeze and ships with built-in SSR.', 
    date: '2022-02-10' },
  ];

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />      
}

export default AllPostsPage;
