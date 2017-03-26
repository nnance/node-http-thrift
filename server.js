/**
 * Created by nicknance on 3/25/17.
 */
const thrift = require("thrift");
const Hello = require("./gen-nodejs/Hello");

const server = thrift.createServer(Hello, {
    hi: (result) => {
        console.log("hi()");
        result(null, "Hello from Thrift");
    }
});

server.listen(9090);
