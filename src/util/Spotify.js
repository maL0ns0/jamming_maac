let userAccessTkn = '';
const clientId = '7461604a1a9943e28444e8273a891779';
const redirectUrl = 'http://localhost:3000/';

export const Spotify ={
    getRandomString(length) {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}';
        let charLength = chars.length;
        let result = '';
        for ( var i = 0; i < length; i++ ) {
           result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    },
    getAuthorizeUrl(){
        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(clientId);
        url += '&scope=' + encodeURIComponent('playlist-modify-public');
        url += '&redirect_uri=' + encodeURIComponent(redirectUrl);
        let state = this.getRandomString(16);
        localStorage.setItem('spotifyStateKey', state);
        url += '&state=' + encodeURIComponent(state);
        
        return (url);
    },
    getAccessToken(){
        if(userAccessTkn){
            return;
        }

        //revisamos si el token y el expireTime estan en la url
        let mtchUsrAccessTkn = window.location.href.match(/access_token=([^&]*)/);
        let mtchExpraTime = window.location.href.match(/expires_in=([^&]*)/);
        if(mtchUsrAccessTkn && mtchExpraTime){
            userAccessTkn = mtchUsrAccessTkn[1];
            let expraTime = Number(mtchExpraTime[1]) * 1000;
            //Despues de un tiempo resetemos la variable tocken para poder generar uno nuevo.
            //Quitamos el el parametro de la url
            window.setTimeout( () => userAccessTkn = '', expraTime );
            window.history.pushState('Access Token', null, '/');
            return (userAccessTkn);
        }
        else{
            //Hacemos la peticion a spotify por un nuevo tocken
            //lo regresa en la url
            window.location = this.getAuthorizeUrl();
        }
    },
    search(searchTerm){
        //https://api.spotify.com/v1/search
        let tracks = fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
        {headers:{Authorization:`Bearer ${userAccessTkn}`}})
        .then(response => response.json())
        .then(jsonResp => {
            if(!jsonResp){
                return ([]);
            }
            console.log(jsonResp)
            let tks = jsonResp.tracks.items.map(t => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri
            }));
            
            return tks;
        })
        .catch(err => {
            console.log('Spotify ERR' + err);
        });

        return tracks;
    }

}