import { mergeConfig } from "vite";
import nodeTestConfig from "@iamhoonse-dev/vitest-config/node";
import viteConfig from "./vite.config";

export default mergeConfig(viteConfig, nodeTestConfig);
