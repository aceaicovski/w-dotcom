import { FC } from "react";
import { UniformText, UniformSlot } from "@uniformdev/canvas-react";
import { TableCellProps } from ".";

export const TableDataCell: FC<TableCellProps> = ({ useAsSlot = false }) => (
  <td className="text-sm lg:text-base">
    {useAsSlot ? <UniformSlot name="value" /> : <UniformText placeholder="Value goes here" parameterId="value" />}
  </td>
);
