import { defineProject, mergeConfig } from "vitest/config";
import base from "@iamhoonse-dev/vitest-config/base";

const node = mergeConfig(
  base,
  defineProject({
    test: {
      environment: "node",
    },
  }),
);
export default node;
