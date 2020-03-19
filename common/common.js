/**
 * 给定条件，返回数组中匹配元素
 */
function fetchFromArray(array, conditions) {
    for (let item of array) {
        let flag = true;
        for (let key in conditions) {
            if (item[key] !== conditions[key]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return item;
        }
    }
    return null;
}

function loadImage(url, callback) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
        callback(img);
    })
}