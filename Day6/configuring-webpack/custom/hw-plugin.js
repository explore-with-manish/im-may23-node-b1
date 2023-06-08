class HelloPlugin {
    apply(compiler) {
        compiler.hooks.done.tap("Hello Plugin", (stats) => {
            console.log("Hello from Plugin");
        });
    }
}

module.exports = HelloPlugin;