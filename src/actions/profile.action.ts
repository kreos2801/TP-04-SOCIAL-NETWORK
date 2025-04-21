// Mock implementation for static export

// Mock data
const MOCK_USERS = [
  {
    id: "user1",
    name: "Demo User",
    username: "demo_user",
    bio: "This is a demo profile for the static export version.",
    image: "/avatar.png",
    location: "Internet",
    website: "https://example.com",
    createdAt: new Date().toISOString(),
    _count: {
      followers: 42,
      following: 24,
      posts: 10,
    }
  },
  {
    id: "user2",
    name: "Admin",
    username: "admin",
    bio: "Administrator account",
    image: "/avatar.png",
    location: "Server Room",
    website: "https://admin.example.com",
    createdAt: new Date().toISOString(),
    _count: {
      followers: 100,
      following: 50,
      posts: 30,
    }
  },
  {
    id: "user3",
    name: "Test User",
    username: "test_user",
    bio: "Just a test account",
    image: "/avatar.png",
    location: "Testland",
    website: "https://test.example.com",
    createdAt: new Date().toISOString(),
    _count: {
      followers: 15,
      following: 30,
      posts: 5,
    }
  }
];

const MOCK_POSTS = Array(10).fill(null).map((_, i) => ({
  id: `post-${i}`,
  authorId: i % 3 === 0 ? "user1" : i % 3 === 1 ? "user2" : "user3",
  content: `This is a sample post ${i+1} for the static export version.`,
  image: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author: {
    id: i % 3 === 0 ? "user1" : i % 3 === 1 ? "user2" : "user3",
    name: i % 3 === 0 ? "Demo User" : i % 3 === 1 ? "Admin" : "Test User",
    username: i % 3 === 0 ? "demo_user" : i % 3 === 1 ? "admin" : "test_user",
    image: "/avatar.png",
  },
  comments: [],
  likes: [],
  _count: {
    likes: Math.floor(Math.random() * 10),
    comments: Math.floor(Math.random() * 5),
  },
}));

export async function getProfileByUsername(username: string) {
  return MOCK_USERS.find(user => user.username === username) || null;
}

export async function getUserPosts(userId: string) {
  return MOCK_POSTS.filter(post => post.authorId === userId);
}

export async function getUserLikedPosts(userId: string) {
  // Return some mock posts as liked posts
  return MOCK_POSTS.slice(0, 3);
}

export async function updateProfile(formData: FormData) {
  // Mock implementation for static export
  return { success: true, user: MOCK_USERS[0] };
}

export async function isFollowing(userId: string) {
  // Mock implementation for static export
  return Math.random() > 0.5; // Randomly return true or false
}