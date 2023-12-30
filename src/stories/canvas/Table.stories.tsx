import { Table, TableProps } from "@/canvas";
import { Button } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { UniformComposition } from "@uniformdev/canvas-react";
import { createFakeCompositionData } from "../utils";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const BASE_PROPS: TableProps = {
  size: "full",
  textAlign: "center",
  component: {
    type: "table",
    slots: {
      tableHead: [
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableHeaderCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Name",
                  },
                },
              },
              {
                type: "tableHeaderCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Age",
                  },
                },
              },
              {
                type: "tableHeaderCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Location",
                  },
                },
              },
              {
                type: "tableHeaderCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Occupation",
                  },
                },
              },
            ],
          },
        },
      ],
      tableBody: [
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "John Smith",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "32",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "New York",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Software Engineer",
                  },
                },
              },
            ],
          },
        },
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Jane Doe",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "28",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Los Angeles ",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Graphic Designer",
                  },
                },
              },
            ],
          },
        },
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Robert Lee",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "45",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Chicago",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Accountant",
                  },
                },
              },
            ],
          },
        },
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Sarah Brown",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "36",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "San Francisco",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Marketing Manager",
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
};

const SECOND_PROPS: TableProps = {
  size: "full",
  textAlign: "left",
  component: {
    type: "table",
    slots: {
      tableHead: [
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableHeaderCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Division",
                  },
                },
              },
              {
                type: "tableHeaderCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "price",
                  },
                },
              },
              {
                type: "tableHeaderCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "",
                  },
                },
              },
            ],
          },
        },
      ],
      tableBody: [
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Cal Berkeley - 1st Grade Division/Kindergarten",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "price",
                    value: "$315.00",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "button",
                    value: <Button style="secondary" copy="Register" rounded />,
                  },
                },
              },
            ],
          },
        },
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Cal Berkeley - 2st Grade Division/Kindergarten",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "price",
                    value: "$315.00",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "button",
                    value: <Button style="secondary" copy="Register" rounded />,
                  },
                },
              },
            ],
          },
        },
        {
          type: "tableRow",
          slots: {
            cells: [
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "text",
                    value: "Cal Berkeley - 3st Grade Division/Kindergarten",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "price",
                    value: "$315.00",
                  },
                },
              },
              {
                type: "tableDataCell",
                parameters: {
                  value: {
                    type: "button",
                    value: <Button style="secondary" copy="Register" rounded />,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
};

const argTypes = {
  size: { control: "select", options: ["tiny", "small", "normal", "large", "full"] },
  textAlign: { control: "select", options: ["left", "center", "right"] },
};

const renderStory = (args: TableProps) => {
  const fakeComposition = createFakeCompositionData("table", args, { ...args.component.slots });
  return (
    <UniformComposition data={fakeComposition}>
      <Table {...args} />
    </UniformComposition>
  );
};

export const Default: Story = {
  args: BASE_PROPS,
  argTypes,
  render: renderStory,
};

export const ZebraCenter: Story = {
  args: {
    ...BASE_PROPS,
    component: {
      ...BASE_PROPS.component,
      variant: "zebra",
    },
  },
  argTypes,
  render: renderStory,
};

export const ZebraLeft: Story = {
  args: {
    ...SECOND_PROPS,
    component: {
      ...SECOND_PROPS.component,
      variant: "zebra",
    },
  },
  argTypes,
  render: renderStory,
};
