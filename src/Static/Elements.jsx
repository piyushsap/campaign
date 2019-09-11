const element = {
    text:[{
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
    image:[{
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
    pageDivider:[{
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
    row:[{
        columns:{
            label: 'Choose Columns',
            inputType: 'select',
            options:['1','2','3','4']
        }
    }],
    cell:[{
        columns:{
            label: 'column width in %',
            inputType: 'text',
        }
    }],
}
export default element;