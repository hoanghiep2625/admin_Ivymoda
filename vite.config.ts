import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5174,
    allowedHosts: ["admin.elavia.tahoanghiep.com"], // 👈 thêm dòng này
  },
});
