
export const getGifs = async(propers) =>{
    const url = `http://api.giphy.com/v1/gifs/search?api_key=LFUTaA2DFtI35sJIHCXPY3yLc0wW3qdA&q=${propers}&limit=20`
    const resp = await fetch(url);
    const {data = []} = await resp.json();
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}

