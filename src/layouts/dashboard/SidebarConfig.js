import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
// import briefcaseFill from "@iconify/icons-eva/briefcase-fill";
import swapFill from "@iconify/icons-eva/swap-fill";
import clipboardFill from "@iconify/icons-eva/clipboard-fill";
import syncFill from "@iconify/icons-eva/sync-fill";
// constants
import { ROUTES_URL } from "../../constants/url.constant";
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "Dashboard",
    path: ROUTES_URL.DASHBOARD + "/app",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Transactions",
    path: ROUTES_URL.TRANSACTIONS,
    icon: getIcon(swapFill),
  },
  {
    title: "Point of Sale",
    path: ROUTES_URL.POINT_OF_SALE,
    icon: getIcon(clipboardFill),
  },
  {
    title: "Refund Request",
    path: ROUTES_URL.REFUND_REQUEST,
    icon: getIcon(syncFill),
  },
];

export default sidebarConfig;
