const { override,addWebpackAlias,addDecoratorsLegacy} = require('customize-cra');
const path = require("path");
module.exports = override(
    addWebpackAlias({
        "@":path.join(__dirname,"./src"),
        "@actions":path.join(__dirname,"./src/actions"),
        "@api":path.join(__dirname,"./src/api"),
        "@common":path.join(__dirname,"./src/common"),
        "@components":path.join(__dirname,"./src/components"),
        "@layout":path.join(__dirname,"./src/layout"),
        "@pages":path.join(__dirname,"./src/pages"),
        "@store":path.join(__dirname,"./src/store"),
        "@utils":path.join(__dirname,"./src/utils")
    }),
    addDecoratorsLegacy()
);