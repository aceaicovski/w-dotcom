import React, { FC } from "react";
import classnames from "classnames";

interface Props {
  data: Types.TableJSON;
  size: Types.TableSize;
}

export const TableData: FC<Props> = ({ data, size }) => {
  const id = React.useId();
  const rows = Object.keys(data);
  const head = Object.keys(data[rows[1]]);

  return (
    <>
      <thead className={classnames(size === "full" ? "border-b-2 border-solid" : "")}>
        {head.map((headCell, i) => (
          <th className="text-base font-semibold md:text-lg lg:text-xl" key={`head-${i}-${id}`}>
            {headCell}
          </th>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}-${id}`}>
            {Object.keys(data[row]).map((cell, j) => (
              <td key={`cell-${j}-${id}`} className="text-sm lg:text-base">
                {data[row][cell]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};
