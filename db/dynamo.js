const AWS = require('aws-sdk');
require('dotenv').config();

const table_name='maple_boss';

const Key = {
    accessKeyId:process.env.AWS_ACCESS_KEY,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    region : 'ap-northeast-2'
}
AWS.config.update(Key);

const awsConfig = {
    conf: Key,
    docClient: new AWS.DynamoDB.DocumentClient(),
    table: table_name
};

module.exports = awsConfig;


