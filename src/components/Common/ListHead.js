import { Checkbox, TableRow, TableCell, TableHead } from "@mui/material";

// ----------------------------------------------------------------------

export default function ListHead({
  headCheckBox,
  rowCount,
  headLabel,
  numSelected,
  onSelectAllClick,
}) {
  return (
    <TableHead>
      <TableRow>
        {headCheckBox && (
          <TableCell>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        )}
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.alignRight ? "right" : "left"}
            // sortDirection={orderBy === headCell.id ? order : false}
          >
            {/* <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              // direction={orderBy === headCell.id ? order : "asc"}
              // onClick={createSortHandler(headCell.id)}
            > */}
            {headCell.label}
            {/* {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
