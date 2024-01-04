import type { Meta, StoryObj } from "@storybook/react";
import { UniformComposition } from "@uniformdev/canvas-react";
import { Flex, FlexProps } from "@/canvas";
import { createFakeCompositionData, createUniformParameter } from "../utils";
import { FlexVariants } from "@/components/_dotcom/Flex";

import { flexContentOptions, flexItemsOptions, responsiveBreakpoints } from "../constants";
import { Container } from "@/components";

const meta: Meta<typeof Flex> = {
  title: "Data Display/Flex",
  component: Flex,
  parameters: {
    controls: {
      // Hide component entry in story controls
      exclude: /component*/g,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

const argTypes = {
  variant: {
    control: "select",
    options: FlexVariants,
  },
  applyAt: { control: "select", options: responsiveBreakpoints },
  justifyContent: { control: "select", options: flexContentOptions },
  justifyItems: { control: "select", options: flexItemsOptions },
  alignContent: { control: "select", options: flexContentOptions },
  alignItems: { control: "select", options: flexItemsOptions },
  className: { control: "text" },
};

const BASE_PROPS: FlexProps = {
  variant: "row",
  component: {
    type: "flex",
  },
};

const CARDS = [
  {
    image:
      "https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png",
    title: "Leverage existing technology investments ",
    description:
      "Use this paragraph to share information about your company or brand. Make it as engaging as possible.",
  },
  {
    image:
      "https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png",
    title: "Leverage existing technology investments ",
    description:
      "Use this paragraph to share information about your company or brand. Make it as engaging as possible.",
  },
  {
    image:
      "https://res.cloudinary.com/uniform-demos/image/upload/v1692276539/csk-marketing/Hero-Rectangle_nof1km_qy2ow6.png",
    title: "Leverage existing technology investments ",
    description:
      "Use this paragraph to share information about your company or brand. Make it as engaging as possible.",
  },
];

const renderStory = (args: FlexProps) => {
  const fakeComposition = createFakeCompositionData("flex", args, {
    items: CARDS.map(card => ({
      type: "card",
      parameters: createUniformParameter(card),
    })),
  });
  return (
    <UniformComposition data={fakeComposition}>
      <Container>
        <Flex {...args} />
      </Container>
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};
