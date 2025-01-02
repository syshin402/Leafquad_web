import { useMemo } from "react";
import placeholder from "../images/placeholder-profile.png";

export function useCombineUserData(users) {
  const combinedUserData = useMemo(() => {
    return users.map((user, index) => ({
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      major: user.major || "Unknown Major", // or remove if you don’t have a 'major' column
      interests: [
        user.user_profiles?.bio || "No bio provided", // from user_profiles table
        user.email || "No email",
        `Graduation Year: ${user.graduationYear || "Unknown graduation year"}`
      ],
      imgSrc: user.profilepicture || placeholder,  // from “profilepicture” column
      _index: index  // store index for toggling favorites
    }));
  }, [users]);

  return combinedUserData;
}
