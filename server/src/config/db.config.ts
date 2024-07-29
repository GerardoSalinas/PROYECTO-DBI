const user: string = process.env.DB_USER || "";
const password: string = process.env.DB_PWD || "";
const database: string = process.env.DB_NAME || "";
const server: string = process.env.SERVER || "";

export const sqlConfig = {
  user,
  password,
  database,
  server,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const config = {
  server,
  database,
  options: {
    trustedConnection: true, // Set to true if using Windows Authentication
    trustServerCertificate: false, // Set to true if using self-signed certificates
  },
  driver: "msnodesqlv8", // Required if using Windows Authentication
};

export const configString: string = `Driver=msnodesqlv8;Server=(local)\\INSTANCE;Database=${database};UID=DOMAIN\\username;PWD=${password};Encrypt=true`;
export const configTediusString: string = `Server=localhost,1433;Database=${database};Encrypt=true`;
export const sqlConfigString: string = `Server= ${server}; Database= ${database}; Integrated Security=True;`;
export const connetionString: string = `Data Source=localhost\\SQLEXPRESS;Database=${database};`;