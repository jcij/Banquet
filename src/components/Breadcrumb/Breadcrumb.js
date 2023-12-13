import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { routesMapper } from "../../utils/constant";
import { Typography } from "@mui/material";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { routesForBreadcrumbs } from "../../utils/constant";

function Breadcrumb() {
  const crumbs = useBreadcrumbs(routesForBreadcrumbs);

  const selectedCrumbs = crumbs.filter((crumb) => {
    return routesMapper.includes(crumb.match.pattern.path);
  });

  if (selectedCrumbs.length <= 1) return null;
  const last = selectedCrumbs.pop();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {selectedCrumbs.map(({ match, breadcrumb }) => (
        <Link
          key={match.pathname}
          to={match.pathname}
          style={{ textDecoration: "none", color: "#00aa55" }}
        >
          {breadcrumb}
        </Link>
      ))}
      <Typography color="text.primary">{last.breadcrumb}</Typography>
    </Breadcrumbs>
  );
}

export default Breadcrumb;
