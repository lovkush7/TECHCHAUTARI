import "dotenv/config";


class Envconfig {
    static DB_HOST = process.env.DB_HOST;
    static DB_PORT = process.env.DB_PORT;
    static DB_NAME = process.env.DB_NAME;
    static DB_USER = process.env.DB_USER;
    static DB_PASSWORD = process.env.DB_PASSWORD;
    static PORT = process.env.PORT;
    static DB_DATABASE = process.env.DB_DATABASE;
    
   
   //PORT
   static SERVER_PORT = process.env.SERVER_PORT;

   //jwtsec
   static JWT_SECRET = process.env.JWT_SECRET;


   //CLOUDNARY
   static CLOUD_NAME = process.env.CLOUD_NAME;
   static CLOUD_API_KEY = process.env.CLOUD_API_KEY;
   static CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;


}
export default Envconfig;

