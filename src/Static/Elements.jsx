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
        color:{
            label: 'Text Color',
            inputType: 'color',
        },
        'lineHeight':{
            label:'Line height',
            inputType: 'text',
        },
        style:{
            label:'Custom style',
            inputType: 'textarea',
        },
        default:{
            text: "hello", 
            type: 'p', 
            style:{'color': '#000','font-weight': '#000','line-height':1},
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
    Input:[{
        label:{
            label: 'Input Label',
            inputType: 'text',
        },
        placeholder:{
            label: 'Enter Placeholder',
            inputType: 'text',
        },
        class: {
            label: 'Class',
            inputType: 'text',
        },
        type:{
            label: 'Input Type',
            inputType: 'select',
            options:['text','email','password','date','checkbox']
        },
        name:{
            label: 'Input Name',
            inputType: 'text',
        }
    }],
    Video:[{
        width:{
            label: 'Width',
            inputType: 'text',
        },
        height:{
            label: 'height',
            inputType: 'text',
        },
        videoUrl: {
            label: 'Video URL',
            inputType: 'text',
        },
        class: {
            label: 'Class',
            inputType: 'text',
        }
    }],
    Button:[{
        val:{
            label: 'Label',
            inputType: 'text',
        },
        class: {
            label: 'Class',
            inputType: 'text',
        }
    }],
    Select:[{
        label:{
            label: 'Label',
            inputType: 'text',
        },
        options:{
            label: 'Options',
            inputType: 'text',
        },
        class: {
            label: 'Class',
            inputType: 'text',
        }
    }],
    Textarea:[{
        label:{
            label: 'Label',
            inputType: 'text',
        }
    }],
    Form:[{
        formAction:{
            label: 'URL',
            inputType: 'text',
        },
        class: {
            label: 'Class',
            inputType: 'text',
        }
    }]
}
export default element;