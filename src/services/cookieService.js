
class CookieService {
    setCookie(name, value, options = {}) {
        options = {
            path : '/',
            ...options
        };
        let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        for(let key in options) {
            if(key === 'expires' && options[key] instanceof Date) {
                options.expires = options.expires.toUTCString();
            }
            cookie += `; ${key}`;
            let value = options[key];
            if(value !== true) {
                cookie += `=${value}`
            }
        }
        document.cookie = cookie;
    }

    removeCookie(name) {
        this.setCookie(name, "", {"max-age":-1});
    }

    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}

export default new CookieService();