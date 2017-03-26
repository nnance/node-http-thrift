/**
 * Created by nicknance on 3/25/17.
 */

const thrift = require("thrift");
const Hello = require("./gen-nodejs/Hello");

const connection = thrift.createConnection("localhost", 9090, {
    transport: thrift.TBufferedTransport,
    protocol: thrift.TBinaryProtocol
});

// Create a Hello client with the connection
const client = thrift.createClient(Hello, connection);

module.exports = async (req, res) => {
    return new Promise((resolve, reject) => {
        client.hi((err, response) => {
            if (err) return reject(err);
            resolve(response);
        })
    })
}
