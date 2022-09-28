const { api, type, Extension } = require('clipcc-extension');
const cvs = api.getStageCanvas();
class ExampleExtension extends Extension {
    onInit() {
        api.addCategory({
            // 替換為<你的擴充套件id>.category 下同
            categoryId: 'em.awp.category',
            messageId: 'em.awp.category',
            color: '#81D8D0'
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
            opcode: 'em.awp.addFont',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.addFont',
            categoryId: 'em.awp.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: '16'
                },
                URL: {
                    type: type.ParameterType.STRING,
                    default: '2'
                }
            }
            ,
            function: args => this.addFont(args.NAME, args.URL)
        });
    }

    onUninit() {
        api.removeCategory('em.awp.category');
    }

    ReturnValue(VALUE) {
        return VALUE;
    }

    //應該有問題
    addFont(family, source) {
        let myFont = new FontFace(
            family,
            "url(${ source })"
          );
          
          myFont.load().then((font) => {
            document.fonts.add(font);
            console.log("Font loaded");
          });

    }
}
module.exports = ExampleExtension;
//npm run build
