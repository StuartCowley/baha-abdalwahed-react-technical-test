import axios from "axios";

const getImages = (query) => {

    if (!query) {
        return Promise.resolve([]);

    } else {

        return axios
        .get(`https://images-api.nasa.gov/search?q=moon`)
        .then((response) => {
            //console.log(response.data.collection.items)
            const imageResults = response.data.collection.items;
            const parsedImages = imageResults.filter(result => result.data[0].media_type === "image");
            const images = parsedImages.map(image => image.link[0].href)
            return images;
        })
        .catch((err) => {
            console.log(err);
        });

    };
};

export default getImages;