const {api, type, Extension} = require('clipcc-extension');
class ExampleExtension extends Extension {
    onInit() {
        api.addCategory({
            // 替換為<你的擴充套件id>.category 下同
            categoryId: 'em.awp.category', 
            messageId: 'em.awp.category',
            color: '#339900'
        });
        api.addBlock({
            opcode: 'em.awp.return',
            type: type.BlockType.REPORTER,
            messageId: 'em.awp.return',
            categoryId: 'em.awp.category',
            param: {
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Hello World!'
                }
            },
            function: args => this.ReturnValue(args.VALUE)
        });
        api.addBlock({
            opcode: 'em.awp.helloworld',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.helloworld',
            categoryId: 'em.awp.category',
            function: args => this.HelloWorld()
        });
    }
    onUninit() {
        api.removeCategory('em.awp.category');
    }
    ReturnValue(VALUE) {
        return VALUE;
    }
    HelloWorld() {
        console.log("Hello World!");
        alert("Hello World!");
    }
}
module.exports = ExampleExtension;
//npm run build
