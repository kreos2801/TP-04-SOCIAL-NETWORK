// Mock implementation for static export

// Mock data
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

export async function createPost(content: string, image: string) {
  // Mock implementation for static export
  return { 
    success: true, 
    post: {
      id: `post-${Date.now()}`,
      authorId: "user1",
      content,
      image,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } 
  };
}

export async function getPosts() {
  // Return mock posts for static export
  return MOCK_POSTS;
}

export async function toggleLike(postId: string) {
  // Mock implementation for static export
  return { success: true };
}

export async function createComment(postId: string, content: string) {
  // Mock implementation for static export
  return { 
    success: true,
    comment: {
      id: `comment-${Date.now()}`,
      content,
      authorId: "user1",
      postId,
      createdAt: new Date().toISOString(),
    }
  };
}

export async function deletePost(postId: string) {
  // Mock implementation for static export
  return { success: true };
}