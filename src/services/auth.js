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
    constructor(jwt_token) {
        super()
        this.jwt_token = jwt_token
    }

    authenticate(){
        return false;
    }

    grant(grant){

    }

    issuedTime(){

    }

    userName(){

    }

    callAuthenticator(){

    }
}

function authFactory(authType = null) {
    switch (authType) {
        case (null): 
            return new JWTAuth(); // small lil factory class
        case ('JWTAuth'):
            return new JWTAuth();
        case ('BaseAuth'):
            throw 'NotImplemented'
        default:
            throw 'NotImplemented'
    }
}

export { authFactory, JWTAuth };