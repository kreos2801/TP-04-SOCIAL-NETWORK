import { getRandomUsers } from "@/actions/user.action";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import FollowButton from "./FollowButton";

async function WhoToFollow() {
  try {
    const users = await getRandomUsers();
    
    // Ajout de log pour le débogage
    console.log("Random users fetched:", users);

    // Si aucun utilisateur n'est trouvé, afficher un message à la place de retourner null
    if (!users || users.length === 0) {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Who to Follow</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              No suggestions available at the moment.
            </p>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Who to Follow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex gap-2 items-center justify-between ">
                <div className="flex items-center gap-1">
                  <Link href={`/profile/${user.username}`}>
                    <Avatar>
                      <AvatarImage src={user.image ?? "/avatar.png"} />
                    </Avatar>
                  </Link>
                  <div className="text-xs">
                    <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer">
                      {user.name}
                    </Link>
                    <p className="text-muted-foreground">@{user.username}</p>
                    <p className="text-muted-foreground">{user._count.followers} followers</p>
                  </div>
                </div>
                <FollowButton userId={user.id} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  } catch (error) {
    console.error("Error in WhoToFollow component:", error);
    
    return (
      <Card>
        <CardHeader>
          <CardTitle>Who to Follow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Unable to load suggestions at this time.
          </p>
        </CardContent>
      </Card>
    );
  }
}

export default WhoToFollow;