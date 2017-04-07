export default (url, callBack, type='GET', timeout='3000')=>{
    $.ajax({
        url: `${url}`, type: `${type}`, timeout: `${timeout}`,
        success: function (src) {
            callBack && callBack(src);
        },
        error: function (e) {
            alert('请求出错, 刷新重试');
        }
    });
};

export const viewData = (result)=>{
    console.log(result);
};
