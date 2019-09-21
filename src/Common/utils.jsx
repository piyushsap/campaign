export const styleToObject = (style) => {
    let styleObj = {};
    if (style) {
        const styles = style.split(';')
        for (let i = 0; i < styles.length; i++) {
            const style = styles[i];
            const styleKeyValue = style.split(':');
            if (styleKeyValue.length !== 2) {
                continue;
            }
            styleObj[styleKeyValue[0].trim()] = styleKeyValue[1].trim();
        }
    }
    return styleObj;
}