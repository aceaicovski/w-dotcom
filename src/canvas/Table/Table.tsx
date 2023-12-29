import { FC } from "react";
import classnames from "classnames";
import { UniformSlot } from "@uniformdev/canvas-react";
import { TableProps, TableVariant } from ".";
import { getTableSize, getTableAlign } from "./helpers";

export const Table: FC<TableProps> = ({ size, textAlign, component }) => (
  <div
    className={classnames(
      size === "full" ? "overflow-x-auto md:border-2 md:border-solid md:rounded-2xl" : "overflow-x-auto"
    )}
  >
    <table
      className={classnames("table text-primary", getTableSize(size), getTableAlign(textAlign), {
        "table-zebra": component?.variant === TableVariant.Zebra,
      })}
    >
      <thead className={classnames(size === "full" ? "border-b-2 border-solid" : "")}>
        <UniformSlot name="tableHead" />
      </thead>
      <tbody>
        <UniformSlot name="tableBody" />
      </tbody>
    </table>
  </div>
);
