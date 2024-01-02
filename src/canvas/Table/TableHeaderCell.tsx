import { FC } from "react";
import { UniformText } from "@uniformdev/canvas-react";
import { TableCellProps } from ".";

export const TableHeaderCell: FC<TableCellProps> = () => (
  <th className="text-base font-semibold md:text-lg lg:text-xl">
    <UniformText placeholder="Value goes here" parameterId="value" />
  </th>
);
