export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    apiGateway: {
        URL: "https://1wmc4p62qd.execute-api.us-east-1.amazonaws.com/prod",
        REGION: "us-east-1"
    },
    s3: {
        BUCKET: "jing-notes-app-upload"
    },
    cognito: {
        USER_POOL_ID: "us-east-1_vHwJhLSa0",
        APP_CLIENT_ID: "5adl9016b7h8sn16nglc5vmv7",
        REGION: "us-east-1",
        IDENTITY_POOL_ID: "us-east-1:3b147cf5-c4a8-4b77-8d64-c2617d27f6f3",

    }
};