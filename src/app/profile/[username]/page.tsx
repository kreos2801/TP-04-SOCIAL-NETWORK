import { notFound } from "next/navigation";
import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/actions/profile.action";
import ProfilePageClient from "./ProfilePageClient";

export function generateMetadata({ params }: { params: { username: string } }) {
  // This can be simplified for static export
  return {
    title: `User Profile - ${params.username}`,
    description: `Check out ${params.username}'s profile.`,
  };
}

// Generate static paths for the build
export function generateStaticParams() {
  // For static export, we need to return an array of parameters
  // Since this is a dynamic social app, for GitHub Pages we'll use
  // a sample of usernames for demonstration purposes
  return [
    { username: 'demo_user' },
    { username: 'admin' },
    { username: 'test_user' },
    // Add more sample usernames as needed for your demo
  ];
}

async function ProfilePageServer({ params }: { params: { username: string } }) {
  try {
    // For GitHub Pages static export, we can mock the behavior
    // or provide static fallback data
    const mockUser = {
      id: '123',
      name: params.username,
      username: params.username,
      bio: 'This is a demo profile for the static export version.',
      image: '/avatar.png',
      location: 'Internet',
      website: 'https://example.com',
      createdAt: new Date().toISOString(),
      _count: {
        followers: 42,
        following: 24,
        posts: 10,
      },
    };
    
    const mockPosts = Array(5).fill(null).map((_, i) => ({
      id: `post-${i}`,
      authorId: mockUser.id,
      content: `This is a sample post ${i+1} for the static export version.`,
      image: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        id: mockUser.id,
        name: mockUser.name,
        username: mockUser.username,
        image: mockUser.image,
      },
      comments: [],
      likes: [],
      _count: {
        likes: Math.floor(Math.random() * 10),
        comments: Math.floor(Math.random() * 5),
      },
    }));
    
    return (
      <ProfilePageClient
        user={mockUser}
        posts={mockPosts}
        likedPosts={[]}
        isFollowing={false}
      />
    );
  } catch (error) {
    console.error("Error in ProfilePageServer:", error);
    notFound();
  }
}

export default ProfilePageServer;