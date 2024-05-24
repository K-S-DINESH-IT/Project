/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
    return (
        <form>
            <Carousel>
                <Carousel.Item interval={1000}>
                    < img id='headerimg1' src="https://www.audigurgaon.com/images/q8_e-tron.jpg" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    < img id='headerimg1'src="https://c4.wallpaperflare.com/wallpaper/370/231/779/audi-audi-rs5-coupe-car-wallpaper-preview.jpg" text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id='headerimg1' src="https://wallpapercave.com/wp/wp2738229.jpg" text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div class="main">

                {/* <!--cards --> */}

                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q7/10558/1689594791308/front-left-side-47.jpg?impolicy=resize&imwidth=480" />
                    </div>
                    <div class="title">
                        <h1> Audi Q7</h1>
                    </div>
                    <div class="des">

                        <button>Read More...</button>
                    </div>
                </div>
                {/* <!--cards --> */}


                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q3/11363/1708935637129/front-left-side-47.jpg?tr=w-664" />
                    </div>
                    <div class="title">
                        <h1>Audi Q3</h1>
                    </div>
                    <div class="des">

                        <button>Read More...</button>
                    </div>
                </div>
                {/* <!--cards --> */}


                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/A4/10548/1689591781105/front-left-side-47.jpg?tr=w-664" />
                    </div>
                    <div class="title">
                        <h1>Audi A4</h1>
                    </div>
                    <div className="des">
                        <button>Read More...</button>
                    </div>
                </div>
                {/* <!--cards --> */}


                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q5/10556/1689594416925/front-left-side-47.jpg?tr=w-664" />
                    </div>
                    <div class="title">
                        <h1>Audi Q5</h1>
                    </div>
                    <div class="des">

                        <button>Read More...</button>
                    </div>
                </div>
                {/* <!--cards --> */}


                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/A6/10552/1708935437947/front-left-side-47.jpg?tr=w-664" />
                    </div>
                    <div class="title">
                        <h1>Audi A6</h1>
                    </div>
                    <div class="des">

                        <button>Read More...</button>
                    </div>
                </div>
                {/* <!--cards --> */}

                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS5/10563/1708936100481/front-left-side-47.jpg?tr=w-664" />
                    </div>
                    <div class="title">
                        <h1>Audi RS5</h1>
                    </div>
                    <div class="des">

                        <button>Read More...</button>
                    </div>
                </div>
                {/* <!--cards --> */}

                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q8/10562/1694069732249/front-left-side-47.jpg?tr=w-664" />
                    </div>
                    <div class="title">
                        <h1>Audi Q8</h1>
                    </div>
                    <div class="des">

                        <button>Read More...</button>

                    </div>
                </div>
                {/* <!--cards --> */}


                <div class="card">

                    <div class="image">
                        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/e-tron/6591/1677914324939/front-left-side-47.jpg?tr=w-664" />
                    </div>
                    <div class="title">
                        <h1>Audi e-tron</h1>
                    </div>
                    <div class="des">
                        <button>Read More...</button>
                    </div>
                </div>

            </div>
        
        </form >
    )
}
