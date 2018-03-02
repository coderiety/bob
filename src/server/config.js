const {env} = process;

const fromEnv = key => ({
  consul: {path: env[`${key}_CONSUL_PATH`], key: env[`${key}_CONSUL_KEY`]},
  value: env[key],
  vault: {path: env[`${key}_VAULT_PATH`], key: env[`${key}_VAULT_KEY`]}
});

module.exports = {
  bob: {url: env.BOB_URL},
  consul: {url: env.CONSUL_URL},
  docker: {
    buildOptions: JSON.parse(env.DOCKER_BUILD_OPTIONS || '{}'),
    socketPath: env.DOCKER_SOCKET_PATH,
    protocol: env.DOCKER_PROTOCOL,
    host: env.DOCKER_HOST,
    port: parseInt(env.DOCKER_PORT),
    ca: fromEnv('DOCKER_CA'),
    cert: fromEnv('DOCKER_CERT'),
    key: fromEnv('DOCKER_KEY')
  },
  github: {
    clientId: fromEnv('GITHUB_CLIENT_ID'),
    clientSecret: fromEnv('GITHUB_CLIENT_SECRET')
  },
  passwordSaltRounds: parseInt(env.PASSWORD_SALT_ROUNDS),
  postgres: {url: fromEnv('POSTGRES_URL')},
  rootUserId: fromEnv('ROOT_USER_ID'),
  smtp: {
    emailAddress: fromEnv('SMTP_EMAIL_ADDRESS'),
    username: fromEnv('SMTP_USERNAME'),
    password: fromEnv('SMTP_PASSWORD')
  },
  tokenSaltRounds: parseInt(env.TOKEN_SALT_ROUNDS),
  tokenSize: parseInt(env.TOKEN_SIZE),
  vault: {
    auth: {
      data: JSON.parse(env.VAULT_AUTH_DATA || '{}'),
      method: env.VAULT_AUTH_METHOD
    },
    url: env.VAULT_URL
  },
  worker: {buildId: parseInt(env.WORKER_BUILD_ID)}
};
