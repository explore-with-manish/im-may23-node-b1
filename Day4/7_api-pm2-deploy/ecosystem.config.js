module.exports = {
    apps: [
        {
            name: "node-api-server",
            script: "./bin/www",
            env: {
                NODE_ENV: "development",
                PORT: 3000
            },
            env_test: {
                NODE_ENV: "test",
                PORT: 3000
            },
            env_staging: {
                NODE_ENV: "staging",
                PORT: 3000
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 5000
            }
        }
    ]
};