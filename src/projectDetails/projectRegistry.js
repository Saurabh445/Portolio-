import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  hardware: lazy(() => import("./HardwareDetail")),
  iot: lazy(() => import("./IotDetail")),
  software: lazy(() => import("./SoftwareDetail")),
  "digital-infrastructure": lazy(() => import("./DigitalInfrastructureDetail")),
  "data-systems": lazy(() => import("./DataSystemsDetail")),
  automation: lazy(() => import("./AutomationDetail")),
};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
