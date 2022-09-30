
//This param isn't right yet.

const { api, type, Extension } = require('clipcc-extension');
const cvs = api.getStageCanvas();
class ExampleExtension extends Extension {
    onInit() {
        api.addCategory({
            // 替換為<你的擴充套件id>.category 下同
            categoryId: 'em.awp.category',
            messageId: 'em.awp.category',
            color: '#74F7DB'
        });
        api.addBlock({
            opcode: 'em.awp.setFont',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.setFont',
            categoryId: 'em.awp.category',
            param: {
                FONT: {
                    type: type.ParameterType.STRING,
                    default: 'Roboto'
                }
            }
            ,
            function: args => this.setFont(args.FONT)
        });
        api.addBlock({
            opcode: 'em.awp.addFont',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.addFont',
            categoryId: 'em.awp.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: 'Pangolin'
                },
                URL: {
                    type: type.ParameterType.STRING,
                    default: 'https://fonts.gstatic.com/s/pangolin/v6/cY9GfjGcW0FPpi-tWMfN79z4i6BH.woff2'
                }
            }
            ,
            function: args => this.addFont(args.NAME, args.URL)
        });
        api.addBlock({
            opcode: 'em.awp.setAlign',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.addFont',
            categoryId: 'em.awp.category',
            param: {
            	//list
                XALIFN: {
                    type: type.ParameterType.STRING,
                    default: 'up',
                    menu: this.makeMenus('em.awp.addFontMenu',['up','middle','down'])
                },
                YALIGN: {
                    type: type.ParameterType.STRING,
                    default: 'up',
                    menu: this.makeMenus('em.awp.addFontMenu',['up','middle','down'])
                }
            }
            ,
            function: args => this.setAlign(args.XALIFN, args.YALIGN)
        });
        api.addBlock({
            opcode: 'em.awp.setFillStyle',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.setFillStyle',
            categoryId: 'em.awp.category',
            param: {
                COLOR: {
                    type: type.ParameterType.STRING,
                    default: '#000000'
                },
            }
            ,
            function: args => this.setFillStyle(args.COLOR)
        });
        api.addBlock({
            opcode: 'em.awp.strokeStyle',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.strokeStyle',
            categoryId: 'em.awp.category',
            param: {
                COLOR: {
                    type: type.ParameterType.STRING,
                    default: '#000000'
                },
                
            }
            ,
            function: args => this.strokeStyle(args.COLOR)
        });
        api.addBlock({
            opcode: 'em.awp.setSize',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.setSize',
            categoryId: 'em.awp.category',
            param: {
                NAME: {
                    type: type.ParameterType.NUMBER,
                    default: '16'
                }
                
            }
            ,
            function: args => this.setSize(args.NAME)
        });
        api.addBlock({
            opcode: 'em.awp.setStyle',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.setStyle',
            categoryId: 'em.awp.category',
            param: {
                STYLE: {
                    type: type.ParameterType.STRING,
                    default: 'normal'
                    menu: this.makeMenus('em.awp.addFontMenu',['normal','bold','italic','underline'])
                }
            }
            ,
            function: args => this.setStyle(args.STYLE)
        });
        api.addBlock({
            opcode: 'em.awp.fill',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.fill',
            categoryId: 'em.awp.category',
            param: {
                TEXT: {
                    type: type.ParameterType.STRING,
                    default: 'Hi'
                },
                X: {
                    type: type.ParameterType.NUMBER,
                    default: '0'
                },
                Y: {
                    type: type.ParameterType.NUMBER,
                    default: '0'
                },
                WIDTH: {
                    type: type.ParameterType.NUMBER,
                    default: ''
                }
            }
            ,
            function: args => this.fill(args.TEXT, args.X, args.Y,args.WIDTH)
        });
        api.addBlock({
            opcode: 'em.awp.stroke',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.stroke',
            categoryId: 'em.awp.category',
            param: {
                TEXT: {
                    type: type.ParameterType.STRING,
                    default: 'Hi'
                },
                X: {
                    type: type.ParameterType.NUMBER,
                    default: '0'
                },
                Y: {
                    type: type.ParameterType.NUMBER,
                    default: '0'
                },
                WIDTH: {
                    type: type.ParameterType.NUMBER,
                    default: ''
                }
            }
            ,
            function: args => this.stroke(args.TEXT, args.X, args.Y,args.WIDTH)
        });
        api.addBlock({
            opcode: 'em.awp.return',
            type: type.BlockType.REPORTER,
            messageId: 'em.awp.getText',
            categoryId: 'em.awp.getText',
            param: {
                TEXT: {
                    type: type.ParameterType.STRING,
                    default: 'Hi'
                },
                TYPE: {
                    type: type.ParameterType.STRING,
                    default: 'color',
                    menu: this.makeMenus('em.awp.getTextMenu',['Length','Height'])
                }
            },
            function: args => this.getText(args.TEXT,args.TYPE)
        });
        api.addBlock({
            opcode: 'em.awp.get',
            type: type.BlockType.REPORTER,
            messageId: 'em.awp.get',
            categoryId: 'em.awp.category',
            param: {
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Font',
                    menu: this.makeMenus('em.awp.getMenu',['Font','X Align','Y Align','Fill Style','Stroke Style','Size','Style'])
                }
            },
            function: args => this.get(args.VALUE)
        });
        api.addBlock({
            opcode: 'em.awp.clear',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.clear',
            categoryId: 'em.awp.category',
            ,
            function: args => this.clear()
        });

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

em.awp.setFont(){
	 return ;
}
em.awp.setAlign(){
	 return ;
}
em.awp.setFillStyle(){
	 return ;
}
em.awp.strokeStyle(){
	 return ;
}
em.awp.setSize(){
	 return ;
}
em.awp.setStyle(){
	 return ;
}
em.awp.fill(){
	 return ;
}
em.awp.stroke(){
	 return ;
}
em.awp.getText(){
	 return ;
}
em.awp.get(){
	 return ;
}
module.exports = ExampleExtension;
//npm run build
