import axios from "axios";

const getImages = (query) => {

    if (!query) {
        return Promise.resolve([]);

    } else {

        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
<<<<<<< HEAD
            const imageResults = response.data.collection.items;
            const parsedImages = imageResults.filter(result => result.data[0].media_type === "image");
            //console.log(parsedImages, "parsed images")
            const images = parsedImages.map(image => image.links[0].href)
=======
            //console.log(response.data.collection.items)
            const imageResults = response.data.collection.items;
            const parsedImages = imageResults.filter(result => result.data[0].media_type === "image");
            const images = parsedImages.map(image => image.link[0].href)
>>>>>>> 2b529be3cca8260c63e7f030bc73dfa068f5aee7
            return images;
        })
        .catch((err) => {
            console.log(err);
        });

    };
};

export default getImages;