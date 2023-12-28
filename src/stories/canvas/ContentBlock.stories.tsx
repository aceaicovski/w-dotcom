import type { Meta, StoryObj } from "@storybook/react";
import { UniformComposition } from "@uniformdev/canvas-react";
import { ContentBlock, ContentBlockProps } from "@/canvas";
import { Container } from "@/components";
import { BackgroundTypes } from "@/utilities/styling";
import { createFakeCompositionData } from "../utils";
import { titleStyleOptions } from "../constants";

const meta: Meta<typeof ContentBlock> = {
  title: "Data Display/ContentBlock",
  component: ContentBlock,
};

export default meta;
type Story = StoryObj<typeof ContentBlock>;

const BASE_PROPS: Omit<ContentBlockProps, "component"> = {
  title: "This is  Content Block component",
  titleStyle: "h1",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const DIVIDER_PROPS: Omit<ContentBlockProps, "component"> = {
  title: "This is  Content Block with Divider",
  titleStyle: "h1",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  variant: "divider",
};

const SUBTITLE_PROPS: Omit<ContentBlockProps, "component"> = {
  title: "This is  Content Block with subtitle",
  subTitle: "Sub Title",
  titleStyle: "h1",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  variant: "subtitle",
};

const argTypes = {
  titleStyle: { control: "select", options: titleStyleOptions },
};

const renderStory = (args: ContentBlockProps) => {
  const fakeComposition = createFakeCompositionData("contentBlock", args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <Container backgroundType={BackgroundTypes.Light}>
        <ContentBlock {...args} />
      </Container>
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

export const WithDivider: Story = {
  args: DIVIDER_PROPS,
  argTypes,
  render: renderStory,
};

export const SubTitle: Story = {
  args: SUBTITLE_PROPS,
  argTypes,
  render: renderStory,
};
