// For static exports, server actions need to be modified
// This is a static mock version for GitHub Pages

// Mock data
const MOCK_USERS = [
  {
    id: "user1",
    clerkId: "clerk1",
    name: "Demo User",
    username: "demo_user",
    email: "demo@example.com",
    image: "/avatar.png",
    _count: {
      followers: 42,
      following: 24,
      posts: 10,
    }
  },
  {
    id: "user2",
    clerkId: "clerk2",
    name: "Admin",
    username: "admin",
    email: "admin@example.com",
    image: "/avatar.png",
    _count: {
      followers: 100,
      following: 50,
      posts: 30,
    }
  },
  {
    id: "user3",
    clerkId: "clerk3",
    name: "Test User",
    username: "test_user",
    email: "test@example.com",
    image: "/avatar.png",
    _count: {
      followers: 15,
      following: 30,
      posts: 5,
    }
  }
];

export async function syncUser() {
  // In static export, we just return a mock user
  return MOCK_USERS[0];
}

export async function getUserByClerkId(clerkId: string) {
  // Return a mock user for static export
  return MOCK_USERS.find(user => user.clerkId === clerkId) || MOCK_USERS[0];
}

export async function getDbUserId() {
  // Return a mock user ID for static export
  return MOCK_USERS[0].id;
}

export async function getRandomUsers() {
  // Return mock users for static export
  return MOCK_USERS.slice(0, 3);
}

export async function toggleFollow(targetUserId: string) {
  // Mock implementation for static export
  return { success: true };
}