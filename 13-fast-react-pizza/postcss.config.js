// export const plugins = {
//   tailwindcss: {},
//   autoprefixer: {},
// };
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [tailwindcss(), autoprefixer()],
};
