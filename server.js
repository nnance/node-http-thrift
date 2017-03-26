/**
 * Created by nicknance on 3/25/17.
 */
const thrift = require("thrift");

const Hello = require("./gen-nodejs/Hello");

const serverOptions = {
    services: {
        "/": {
            processor: Hello,
            handler: {
                hi: (result) => {
                    console.log("hi()");
                    result(null, "Hello from Thrift");
                }
            }
        }
    },
};

const server = thrift.createWebServer(serverOptions);

server.listen(9090);
