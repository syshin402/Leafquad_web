import {useMemo} from "react"
import placeholder from "../images/placeholder-profile.png";

export function useCombineUserData(users){
    const combinedUserData = useMemo(() => {
        return users.map((user, index) => ({
                name: `${user.first_name} ${user.last_name}`,
                major: user.major || "Unknown Major",
                interests: [
                    user.bio || "No bio provided",
                    user.email || "No email",
                    `Graduation Year: ${user.graduationyear || "Unknown graduation year"}`,
                  ],
                  imgSrc: user.profilepicture || placeholder,
                  _index: index, // store the index for toggling favorites
                }));
    }, [users]);

    return combinedUserData;
}