import React, { useState, useEffect } from 'react';
import firebase from 'firebase'
import axios from 'axios'

type imgSize = {
    width: number,
    height: number
};

type imgObj = {
    id: number,
    title: string,
    url: string
}

const style: imgSize = {
    width: 500,
    height: 300
};

const ImgRender: React.FunctionComponent = () => {

    const [imagePaths, setImgPaths] = useState<imgObj[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [img, setImg] = useState<JSX.Element[]>();
    let ended = false;

    const nowUserUID = firebase.auth().currentUser?.uid;
    const urlTarget = 'http://localhost:3001/' + nowUserUID;

    useEffect(() => {
        if (!ended) {
            axios.get(urlTarget).then(
                (res) => {
                    setImgPaths(res.data);
                    console.log(res.data)
                }
            )
            console.log(imagePaths)
            const images = imagePaths.map(image => {
                return <img key={image.id} src={image.url} alt={image.title} style={style} />
            });
            setImg(images)
            setIsLoaded(true);
            console.log(images)
        }
        return () => { ended = true; }
    }, []);

    if (!isLoaded) {
        return <div>Loading</div>
    } else {
        return (
            <div>
                { img}
            </div>
        )
    }
}

export default ImgRender;