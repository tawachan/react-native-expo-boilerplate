import { Constants } from "expo";

const ENVs = {
  dev: {
    environment: "development" as "development" | "staging" | "production",
    apiUrl: "http://localhost:3000",
  },
  staging: {
    environment: "staging" as "development" | "staging" | "production",
    apiUrl: "https://staging.com",
  },
  production: {
    environment: "production" as "development" | "staging" | "production",
    apiUrl: "https://production.com",
  },
};

function getEnvVars() {
  const options = Constants.manifest.packagerOpts;
  const channel = Constants.manifest.releaseChannel;
  const isDev = options != null ? options.dev : true;
  if (isDev) {
    return ENVs.dev;
  } else {
    if (channel === "production") {
      return ENVs.production;
    } else {
      return ENVs.staging;
    }
  }
}

export const ENV = getEnvVars();
