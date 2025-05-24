import { defineProject, mergeConfig } from "vitest/config";
import base from "@iamhoonse-dev/vitest-config/base";

const ui = mergeConfig(
  base,
  defineProject({
    test: {
      environment: "jsdom",
    },
  }),
);
export default ui;
