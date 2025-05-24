import type { FC } from "react";
import { iamhoonseDevInstance } from "@iamhoonse-dev/http-clients/instances";

const AxiosOnServer: FC = async () => {
  try {
    const response = await iamhoonseDevInstance.get(`/bar`);
    return <>{JSON.stringify(response.data)}</>;
  } catch (error) {
    return <>{JSON.stringify(error)}</>;
  }
};
export default AxiosOnServer;
