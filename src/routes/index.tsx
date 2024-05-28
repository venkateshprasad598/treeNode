import React from "react";
import {
  EditSubjectProfile,
  EditSubSubjectProfile,
  FallBack404,
  PortfolioMap,
  SubjectProfile,
} from "../page";
import { typography } from "../utils/typography.util";

export interface routeListProps {
  id: string | number;
  to: string;
  element: React.ReactElement;
}
export const routeList: routeListProps[] = [
  {
    id: "ROUTE-1",
    to: "/sso-redirect",
    element: <>Redirect</>,
  },
  {
    id: "ROUTE-2",
    to: "/dashboard",
    element: (
      <div className={`${typography["Heading1-60-Semibold"]}`}>Dashboard</div>
    ),
  },
  {
    id: "ROUTE-3",
    to: "/pulse-cockpit",
    element: <>Pulse Cockpit</>,
  },
  {
    id: "ROUTE-4",
    to: "/portfolio-map",
    element: <PortfolioMap />,
  },
  {
    id: "anonymous-portfolio-map-1",
    to: "/subject-profile",
    element: <SubjectProfile />,
  },
  {
    id: "anonymous-portfolio-map-2",
    to: "/edit-root-profile",
    element: <EditSubjectProfile />,
  },
  {
    id: "anonymous-portfolio-map-2",
    to: "/edit-sub-profile",
    element: <EditSubSubjectProfile />,
  },
  {
    id: "ROUTE-5",
    to: "/vault",
    element: <>Vault</>,
  },
  {
    id: "ROUTE-6",
    to: "/dex-aI",
    element: <>Dex AI</>,
  },
  {
    id: "anonymous-route-1",
    to: "/setting",
    element: <>setting</>,
  },
  {
    id: "anonymous-route-404",
    to: "*",
    element: <FallBack404 />,
  },
];
