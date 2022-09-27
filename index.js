const { Extension, type, api } = require('clipcc-extension');

class MyExtension extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'em.awp.category',
            messageId: 'em.awp.category',
            color: '#66CCFF'
        });
        api.addBlock({
            opcode: 'em.awp.hello',
            type: type.BlockType.REPORTER,
            messageId: 'em.awp.hello',
            categoryId: 'em.awp.category',
            function: () => 'Hello, ClipCC!'
        });
    }
}

module.exports = MyExtension;
