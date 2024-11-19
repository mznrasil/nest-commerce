export default () => ({
  appPort: parseInt(process.env.APPLICATION_PORT) || 8000,

  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT) || 5432,
  dbUsername: process.env.POSTGRES_USER,
  dbPassword: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
  dbSynchronize: Boolean(process.env.DB_SYNCHRONIZE),
});
