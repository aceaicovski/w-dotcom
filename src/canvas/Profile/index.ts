import { registerUniformComponent, ComponentProps } from "@uniformdev/canvas-react";
import type { ProfileProps as BaseProfileProps } from "@/components/_dotcom/Profile";
import { Profile } from "./Profile";

export type ProfileProps = ComponentProps<BaseProfileProps>;

registerUniformComponent({
  type: "profile",
  component: Profile,
});

export default Profile;
