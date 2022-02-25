import React from 'react';
import WishListForm from '../WishListItem/WishListForm';

//Styles

import './WishListItems.scss';

const WishListItems = ({ items }) => {
    return (
        <div className="wishlistitems-container">
            {items.length < 1 ? (
                <WishListForm
                    key={+new Date()}
                    title="Título de lo que quiero :)"
                    link="https://articulo.mercadolibre.com.ar/MLA-910547167-silla-gamer-melon-butaca-gaming-2-almohadones-reclinable-_JM?variation=86420416353#reco_item_pos=0&reco_backend=machinalis-homes-pdp-boos&reco_backend_type=function&reco_client=home_navigation-trend-recommendations&reco_id=e3696125-08c7-457f-9528-06fee3f25573&c_id=/home/navigation-trends-recommendations/element&c_element_order=1&c_uid=ee8ecfb5-8761-4c23-b9e9-cbccba7cbc9b"
                    commentary="Este ejemplo se borra una vez que agregues un item."
                />
            ) : (
                items.map((item) => <WishListForm key={item.id} {...item} />)
            )}
        </div>
    );
};

export default WishListItems;
