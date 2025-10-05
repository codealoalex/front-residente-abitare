
import { useState, useEffect} from 'react';
import { Galleria } from 'primereact/galleria';

export default function Carrusel() {
    const [images, setImages] = useState([{
        0: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrEilm311fNJO_QotjhwgUZmT6oB37xYoYh9ogGU8oczW7zTTzLO2CfjF7j9l0zv1E2sE0R26k3bpbGsmjx5jUByRPw62CskSfB6iNmQc',
    }]);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
        </div>
    )
}
