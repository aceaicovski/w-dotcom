import { FC } from "react";
import { UniformText } from "@uniformdev/canvas-react";
import { TableCellProps } from ".";

export const TableDataCell: FC<TableCellProps> = () => (
  <td className="text-sm lg:text-base">
    <UniformText placeholder="Value goes here" parameterId="value" />
  </td>
);
