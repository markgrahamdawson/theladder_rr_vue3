import type { RouterConfig } from "@nuxt/schema";
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  async scrollBehavior(to, _from, savedPosition) {
    // timeout for page animation
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: "smooth", top: 80 };
    } else {
      return { top: 0 };
    }
  },
};
