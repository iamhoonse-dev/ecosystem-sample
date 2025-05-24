import { initMockServer } from "@iamhoonse-dev/node-utils/msw";
import rootHandlers from "@iamhoonse-dev/http-clients/mocks";
import { USE_MSW } from "../../../configs/mocks";

export default async function setupMockServer() {
  // This code is only executed when msw is activated
  if (!USE_MSW) return;

  // init the mock server with the provided request handlers
  await initMockServer(rootHandlers);

  // log a message indicating that the mock server has been started
  console.log("[setupMockServer] Mock server started");
}
