export { restaurantContent } from "./restaurant";
export { cafeContent } from "./cafe";
export { salonContent } from "./hair-salon";

export const demoSites = {
  restaurant: "restaurant",
  cafe: "cafe",
  "hair-salon": "hair-salon",
} as const;

export type DemoSlug = keyof typeof demoSites;
