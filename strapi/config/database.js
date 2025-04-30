module.exports = ({ env }) => ({
    connection: {
        client: 'mysql',
        connection: {
            host: env('MYSQL_HOST', 'mysql.railway.internal'),  // Replace with actual host
            port: env.int('MYSQL_PORT', 3306),  // Default MySQL port
            database: env('MYSQL_DATABASE', 'railway'),  // Replace with your database name
            user: env('MYSQL_USER', 'root'),  // Replace with your database username
            password: env('MYSQL_PASSWORD', 'your-database-password'),  // Replace with your password
            ssl: { rejectUnauthorized: false },  // SSL option for production
        },
        debug: false,
    },
});
