import React from "react";
import { Carousel } from "react-bootstrap";

import logo from "../Images/LoraLogo.jpg";

function CarouselComponent() {
    return (
        <Carousel className="carousel">
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 carousel-img"
                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/469014668_586297570576952_7165663208626051633_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvIaO6GGj8rccbHUEvBigPZ2bkDck0-otnZuQNyTT6izcnanmtrHfI65k3Y5bzAKfv6ETeNJLRwy4H99Nu9c8b&_nc_ohc=XzWeMwsrGKUQ7kNvgEXeDTd&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ANhwgsdizZt3VTvFNdEXP-f&oh=00_AYDiA7y6VQFH0QzfHcvOLL5Tt_nTSupUivldXZG_0cYtgg&oe=675D0BD4"
                    alt="First slide"
                />
                <Carousel.Caption className="caption">
                    <h1>
                        Discover your <span>Passion</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="item">
                <img
                    className="d-block w-100 carousel-img"
                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/469014668_586297570576952_7165663208626051633_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvIaO6GGj8rccbHUEvBigPZ2bkDck0-otnZuQNyTT6izcnanmtrHfI65k3Y5bzAKfv6ETeNJLRwy4H99Nu9c8b&_nc_ohc=XzWeMwsrGKUQ7kNvgEXeDTd&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ANhwgsdizZt3VTvFNdEXP-f&oh=00_AYDiA7y6VQFH0QzfHcvOLL5Tt_nTSupUivldXZG_0cYtgg&oe=675D0BD4"
                    alt="Second slide"
                />
                <Carousel.Caption className="caption">
                    <h1>
                        Show your <span>Style</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="item">
                <img
                    className="d-block w-100 carousel-img"
                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/469014668_586297570576952_7165663208626051633_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvIaO6GGj8rccbHUEvBigPZ2bkDck0-otnZuQNyTT6izcnanmtrHfI65k3Y5bzAKfv6ETeNJLRwy4H99Nu9c8b&_nc_ohc=XzWeMwsrGKUQ7kNvgEXeDTd&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ANhwgsdizZt3VTvFNdEXP-f&oh=00_AYDiA7y6VQFH0QzfHcvOLL5Tt_nTSupUivldXZG_0cYtgg&oe=675D0BD4"
                    alt="Third slide"
                />
                <Carousel.Caption className="caption">
                    <h1>
                        Live your <span>Dream</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="item">
                <img
                    className="d-block w-100 carousel-img"
                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/469014668_586297570576952_7165663208626051633_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvIaO6GGj8rccbHUEvBigPZ2bkDck0-otnZuQNyTT6izcnanmtrHfI65k3Y5bzAKfv6ETeNJLRwy4H99Nu9c8b&_nc_ohc=XzWeMwsrGKUQ7kNvgEXeDTd&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ANhwgsdizZt3VTvFNdEXP-f&oh=00_AYDiA7y6VQFH0QzfHcvOLL5Tt_nTSupUivldXZG_0cYtgg&oe=675D0BD4"
                    alt="Fourth slide"
                />
                <Carousel.Caption className="caption">
                    <img src={logo} alt="Logo" />
                    <p>Because time flies,</p>
                    <p>But the <span>memories</span> last forever.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;
