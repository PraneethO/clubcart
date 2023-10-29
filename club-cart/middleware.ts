export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/pages/admin-dashboard", "/pages/cart", "/pages/shop"],
};
