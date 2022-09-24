const { Extension, type, api } = require('clipcc-extension');

class MyExtension extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'editmr.googlefont.category',
            messageId: 'editmr.googlefont.category',
            color: '#66CCFF'
        });
        api.addBlock({
            opcode: 'editmr.googlefont.hello',
            type: type.BlockType.REPORTER,
            messageId: 'editmr.googlefont.hello',
            categoryId: 'editmr.googlefont.category',
            function: () => 'Hello, ClipCC!'
        });
    }
}

module.exports = MyExtension;
