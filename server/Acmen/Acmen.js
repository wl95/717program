const http = require('http');
const querystring = require('querystring');

// 码农的又来霍霍网站
module.exports.Acmen = Acmen = (url, parameter, method) => {
    const options = {
        hostname: 'www.lb717.com',
        port: 80,
        path: url,
        method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    };
    let comShop = "";
    return new Promise((resolve, reject) => {
        const requset = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                comShop += chunk;
            });
            response.on('end', () => {
                resolve(JSON.stringify(comShop))
            });

        });
        requset.write(querystring.stringify(parameter));
        requset.end();
    })
}

const defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null,
};

function generateCallbackFunction() {
    return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
}

function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
        delete window[functionName];
    } catch (e) {
        window[functionName] = undefined;
    }
}

function removeScript(scriptId) {
    const script = document.getElementById(scriptId);
    if (script) {
        document.getElementsByTagName('head')[0].removeChild(script);
    }
}

function fetchJsonp(_url, options = {}) {
    // to avoid param reassign
    let url = _url;
    const timeout = options.timeout || defaultOptions.timeout;
    const jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    let timeoutId;

    return new Promise((resolve, reject) => {
        const callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
        const scriptId = `${jsonpCallback}_${callbackFunction}`;

        window[callbackFunction] = (response) => {
            resolve({
                ok: true,
                // keep consistent with fetch API
                json: () => Promise.resolve(response),
            });

            if (timeoutId) clearTimeout(timeoutId);

            removeScript(scriptId);

            clearFunction(callbackFunction);
        };

        // Check if the user set their own params, and if not add a ? to start a list of params
        url += (url.indexOf('?') === -1) ? '?' : '&';

        const jsonpScript = document.createElement('script');
        jsonpScript.setAttribute('src', `${url}${jsonpCallback}=${callbackFunction}`);
        if (options.charset) {
            jsonpScript.setAttribute('charset', options.charset);
        }
        jsonpScript.id = scriptId;
        document.getElementsByTagName('head')[0].appendChild(jsonpScript);

        timeoutId = setTimeout(() => {
            reject(new Error(`JSONP request to ${_url} timed out`));

            clearFunction(callbackFunction);
            removeScript(scriptId);
            window[callbackFunction] = () => {
                clearFunction(callbackFunction);
            };
        }, timeout);

        // Caught if got 404/500
        jsonpScript.onerror = () => {
            reject(new Error(`JSONP request to ${_url} failed`));

            clearFunction(callbackFunction);
            removeScript(scriptId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    });
}


module.exports.fetchJsonp = fetchJsonp;