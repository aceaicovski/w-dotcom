import type { Meta, StoryObj } from "@storybook/react";
import { UniformComposition } from "@uniformdev/canvas-react";
import { UniformImage, UniformImageProps } from "@/canvas";
import { createFakeCompositionData } from "../utils";

const meta: Meta<typeof UniformImage> = {
  title: "Data Display/Image",
  component: UniformImage,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UniformImage>;

const BASE_PROPS: Omit<UniformImageProps, "component"> = {
  width: 400,
  height: 400,
  src: "https://placehold.co/400?text=Placeholder+Image&font=roboto",
};

const renderStory = (args: UniformImageProps) => {
  const fakeComposition = createFakeCompositionData("image", args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <UniformImage {...args} />
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  render: renderStory,
};
