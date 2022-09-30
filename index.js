
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
            function: args => this.ReturnValue(args.VALUE)
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
            function: args => this.ReturnValue(args.VALUE)
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
            function: args => this.addFont(args.NAME, args.URL)
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
            function: args => this.addFont(args.NAME, args.URL)
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
            function: args => this.addFont(args.NAME, args.URL)
        });
        api.addBlock({
            opcode: 'em.awp.strokeStyle',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.strokeStyle',
            categoryId: 'em.awp.category',
            param: {
                COLOR: {
                    type: type.ParameterType.STRING,
                    default: '16'
                },
                
            }
            ,
            function: args => this.addFont(args.NAME, args.URL)
        });
        api.addBlock({
            opcode: 'em.awp.setSize',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.setSize',
            categoryId: 'em.awp.category',
            param: {
                NAME: {
                    type: type.ParameterType.STRING,
                    default: '16'
                }
                
            }
            ,
            function: args => this.addFont(args.NAME, args.URL)
        });
        api.addBlock({
            opcode: 'em.awp.setStyle',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.setStyle',
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
        api.addBlock({
            opcode: 'em.awp.fill',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.fill',
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
        api.addBlock({
            opcode: 'em.awp.stroke',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.stroke',
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
        api.addBlock({
            opcode: 'em.awp.getText',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.getText',
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
        api.addBlock({
            opcode: 'em.awp.get',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.get',
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
        api.addBlock({
            opcode: 'em.awp.size',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.size',
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
        api.addBlock({
            opcode: 'em.awp.font',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.font',
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
        api.addBlock({
            opcode: 'em.awp.xAlign',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.xAlign',
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
        api.addBlock({
            opcode: 'em.awp.yAlign',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.yAlign',
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
        api.addBlock({
            opcode: 'em.awp.clear',
            type: type.BlockType.COMMAND,
            messageId: 'em.awp.clear',
            categoryId: 'em.awp.category',
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
