import { FC } from "react";
import classnames from "classnames";
import { UniformSlot } from "@uniformdev/canvas-react";
import { TableProps, TableVariant } from ".";
import { getTableSize, getTableAlign } from "./helpers";
import { TableData } from "./TableData";

export const Table: FC<TableProps> = ({ size, textAlign, component, data }) => (
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
      {data ? (
        <TableData data={data} size={size} />
      ) : (
        <>
          <thead className={classnames(size === "full" ? "border-b-2 border-solid" : "")}>
            <UniformSlot name="tableHead" />
          </thead>
          <tbody>
            <UniformSlot name="tableBody" />
          </tbody>
        </>
      )}
    </table>
  </div>
);
