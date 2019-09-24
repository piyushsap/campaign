export const styleToObject = (style) => {
    let styleObj = {};
    if (style) {
        const styles = style.split(';')
        for (let i = 0; i < styles.length; i++) {
            const style = styles[i];
            const colonIndex= style.indexOf(':');
            if(colonIndex > -1) {
                const styleKey = style.substring(0, colonIndex);
                const styleValue = style.substring(colonIndex + 1);
                styleKey && styleValue && (styleObj[styleKey.trim()] = styleValue.trim());
            }
        }
    }
    return styleObj;
}