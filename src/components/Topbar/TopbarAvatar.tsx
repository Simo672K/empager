import * as Avatar from "@radix-ui/react-avatar";
import DefaultAvatarImg from "../../assets/images/avatar.png";

function TopbarAvatar() {
  return (
    <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={DefaultAvatarImg}
      />
    </Avatar.Root>
  )
}
export default TopbarAvatar