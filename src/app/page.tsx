// Assurez-vous que ce fichier est placé au bon endroit: app/(main)/page.tsx ou app/page.tsx
import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const post = await getPosts();
  const dbUserId = await getDbUserId();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        <div className="space-y-6">
          {post.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
        {!user && (
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-2">Welcome to Socially</h2>
            <p className="text-muted-foreground">
              Sign in to create posts and interact with other users.
            </p>
          </div>
        )}
        
        <div className="mt-4 space-y-4">
          <p className="text-muted-foreground">No posts yet.</p>
        </div>
      </div>
      
      <div className="hidden lg:block lg:col-span-4 space-y-4">
        <WhoToFollow />
      </div>
    </div>
  );
}