class BaseAuth {
    authenticate() {
        return false;
    }
    
    issuedTime(){
        return Date();
    }

    userName(){
        return '';
    }
}

class JWTAuth extends BaseAuth {
    constructor(jwtToken) {
        super()
        if (jwtToken === null) {
            jwtToken = this.getTokenFromStorage()
        }
        this.jwtToken = jwtToken
        this.jwtContents = null;

    }
    getTokenFromStorage(){
        return ''; // TODO get token from local/cookie storage
    }

    authenticate(){
        return false;
    }

    processJwt(){ // Lazy loading strategies get us around unit tests :) 
        if (this.jwtContents === null) {
            this.jwtContents = parseJwt(this.jwtToken);
        }
    }

    grant(grant){
        this.processJwt();
        return this.jwtContents[grant]
    }

    issuedTime(){
        this.processJwt();
        return new Date(this.jwtContents['iat'] * 1000)
    }

    userName(){
        this.processJwt();
        return this.jwtContents['sub']
    }

    callAuthenticator(){
        // TODO Implement with API (need to write API + Schema first)
    }
}

function authFactory(authenticationObject = null, authType = null) {
    switch (authType) {
        case (null): 
            return new JWTAuth(authenticationObject); // small lil factory class
        case ('JWTAuth'):
            return new JWTAuth(authenticationObject);
        case ('BaseAuth'):
            throw 'NotImplemented'
        default:
            throw 'NotImplemented'
    }
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}; // Thanks Stackoverflow ;) https://stackoverflow.com/a/38552302

export { authFactory, JWTAuth };