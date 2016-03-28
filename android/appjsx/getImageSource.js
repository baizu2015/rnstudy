/**
 * Created by Administrator on 2016/3/25.
 */
"use strict"
export function getImageSource(moive:object,kind:string):{uri:string}{
    var uri = moive && moive.posters ? moive.posters.thumbnail : null;
    if(uri && kind){
        uri = uri.replace("tmp",kind);
    }
    return {uri};
}