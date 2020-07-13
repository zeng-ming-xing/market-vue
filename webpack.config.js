const path = require("path")
const resolve = dir => { return path.join(__dirname, dir) }
module.exports = {
    resolve: {
        alias: {
            "@": resolve("src"),
            _assets: resolve("src/assets"),
            _common: resolve("src/common "),
            _components: resolve("src/components"),
            _network: resolve("src/network"),
            _views: resolve("src/views")
        }
    }
}