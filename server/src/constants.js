let localUri = "mongodb://localhost:27017/profoundry";

const ENV_VARIABLES = {
  PORT: process.env.PORT || 4000,
  MONGODB_URI: process.env.MONGODB_URI || localUri,
  LOCALDB_URL: localUri,
};

export default ENV_VARIABLES;
