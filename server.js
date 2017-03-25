/**
 * Created by nicknance on 3/25/17.
 */
const thrift = require("thrift");
const Hello = require("./gen-nodejs/Hello");

const server = thrift.createServer(Hello, {
    hi: function (result) {
        console.log("hi()");
        result("Hello from Thrfit");
    }
});

server.listen(9090);
