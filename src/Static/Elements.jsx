const element = {
    Text:[{
        text:{
            label: 'your text',
            inputType: 'text',
        },
        type:{
            options: ['h1','h2','h3','h4','h5','h6','p','label','span'],
            label: 'Heading',
            inputType: 'select',
        },
        textColor:{
            label: 'Text Color',
            inputType: 'color',
        },
        linkColor:{
            label: 'Link Color',
            inputType: 'color',
        },
        lineHeight:{
            label:'Line height',
            inputType: 'text',
        }
    }],
    Image:[{
        image:{
            label: 'Upload Image',
            inputType: 'file',
        },
        imageType:{
            label: 'Use image as',
            inputType: 'select',
            options:['Background','Foreground']
        }
    }],
    PageDivider:[{
        color:{
            label: 'Bar Color',
            inputType: 'color',
        },
        imageType:{
            label: 'Use image as',
            inputType: 'select',
            options:['Background','Foreground']
        }
    }],
    Row:[{
        columns:{
            label: 'Choose Columns',
            inputType: 'select',
            options:['1','2','3','4']
        }
    }],
    Cell:[{
        columns:{
            label: 'column width in %',
            inputType: 'text',
        }
    }],
}
export default element;