import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    base: "./", // Is ek dot (.) se saare 404 errors hamesha ke liye fix ho jayenge
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});