<<<<<<< HEAD
import getData from "./getData";
import postData from "./postData";

const second = () => {
    const cartBtn = document.getElementById('cart');

    getData().then((data) => {
        console.log(data);
    });
=======
const second = () => {
    const cartBtn = document.getElementById('cart');

    console.log('second');

>>>>>>> e8c6e4eaa6427ca2369acd86d9e3dda6a0e329e4
}

export default second;