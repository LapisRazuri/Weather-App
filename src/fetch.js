export async function weather (url) {
    try {
        url.searchParams.set('key', 'JUNGCDPBC8E4FRPWSS5JZHXJG');
        const data = await fetch(url, {mode:'cors'});
        console.log(data);
        const weatherInfo = await data.json(); // .json returns a promise which is then resolved by await
        console.log(weatherInfo);

        return weatherInfo;

    } catch(err){
        console.log(err);
        return err;
    }
}

export async function gify(newURL) {
    try { 
        const data = await fetch( newURL, {mode:'cors'});
        console.log(data);
        const gify = await data.json();
        console.log(gify);

        return gify;
    }catch(error){
        console.log(error.message)
        }
    
    } 

