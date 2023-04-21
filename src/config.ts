interface EnvConfig {
  baseUrl?: string;
  appId: number;
}

const env: EnvConfig = {
  baseUrl: 'https://api-test.innoloft.com',
  appId: Number(process.env.REACT_APP_NOT_APP_ID) || 1,
};

export default env;
