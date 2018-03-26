// 同源策略 1.协议相同 2.域名相同 3.端口相同

let domin = ''
if (process.env === 'development') {
    domin="http://localhost:8000"
}

if (process.env === 'production') {
    domin="http://www.lb717.com"
}

let $http = {
    get(url, data) {
        if (data && Object.prototype.toString.call(data) != "[object Object]") {
            return {
                then(callback) {
                    callback('GET请求入参格式不正确，需要穿Object')
                    return {
                        catch(err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }
        let queryString = '?';
        for (var attr in data){
            queryString += (attr +'='+ data[attr] + '&')
        }
        url = encodeURI(url + queryString.slice(0, -1));
        return fetch(domin + url, { 
            headers: {
                "content-type":"application/json;charset=UTF-8"
            }
        }).then(res => res.json())
    },
    post(url, data) { 
        if (data && Object.prototype.toString.call(data) != "[object Object]") {
            return {
                then(callback) {
                    callback('GET请求入参格式不正确，需要穿Object')
                    return {
                        catch(err) {
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }
        return fetch(domin + url, {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json;charset=utf-8",
                "Token":'123'
            }
        }).then(res => res.json())
    },
    fetchJsonp(url, callback) {
        return new Promise((reslove, reject) => {
            callback = function (data) {
                reslove(data);
            }
            let jsonpScript = document.createElement('script');
            let docBody = document.body;
            jsonpScript.src = url;
            docBody.appendChild(jsonpScript);
        })
    }
}   

export default $http;

