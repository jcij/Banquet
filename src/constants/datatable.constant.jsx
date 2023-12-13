export const TABLE_OPTIONS = {
  search: true,
  download: false,
  print: false,
  viewColumns: true,
  filter: true,
  filterType: "dropdown",
  elevation: 0,
  searchAlwaysOpen: true,
  selectableRowsHeader: false,
  selectableRowsHideCheckboxes: true,
  responsive: "standard",
};

export const TABLE_COLUMN_OPTIONS = {
  setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
  setCellHeaderProps: () => ({ style: { whiteSpace: "nowrap" } }),
  sort: true,
  sortOrder: "desc",
};
