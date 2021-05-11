import React, { useState } from "react";
import { Carousel, CarouselItem, Container } from "react-bootstrap";

function Home() {
  const [index, setIndex] = useState(0)
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="homepage">
      <Carousel
        activeIndex={index} onSelect={handleSelect} className="carousel bg-info mb-4" style={{display:"grid", justifyContent:"center", alignContent:"center"}}>
        <CarouselItem>
          <img src="../images/img 5.jpg" alt="" />
          <Carousel.Caption>
            <h3>SHEA BODY CREAM</h3>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img src="../images/img 4.jpg" alt="" />
          <Carousel.Caption>
            <h3>SHEA BODY CREAM</h3>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img src="../images/img 1.jpg" alt="" />
          <Carousel.Caption>
            <h3>SHEA BUTTER</h3>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
      <div className="card-container">
        <div>
          <img src="../images/img 1.jpg" alt="" className="card-img" />
          <h4>Product Name: Shea Butter </h4>
        </div>
        <div>          
          <img src="../images/shea 4.jpg" alt="" className="card-img" />
          <h4>Product Name: Shea Hair Products</h4>
        </div>
        <div>          
          <img src="../images/shea 2.jpg" alt="" className="card-img" />
          <h4>Product Name: Shea Leaves, Fruits and Nuts</h4>
        </div>
         <div> 
          <img src="../images/shea 5.jpg" alt="" className="card-img" />
          <h4>Product Name: Shea Shampoo and Conditioner</h4>
          </div>
        <div> 
          <img src="../images/img 4.jpg" alt="" className="card-img" />
          <h4>Product Name: Shea Butter</h4>
        </div>
        <div>         
          <img src="../images/img 8.jpg" alt="" className="card-img" />
          <h4>Products Name: Shea Butter Nuts</h4>
        </div>
        <div>     
          <img src="../images/img 10.jpg" alt="" className="card-img" />
          <h4>Product Name : Shea Soap</h4>
        </div>
        <div>
          <img src="../images/img 13.jpg" alt="" className="card-img" />
          <h4>Product Name: Shea Hair Products</h4>
        </div>
        <div>
          <img src="../images/img 2.jpg" alt="" className="card-img" />
          <h4>Product Name : Shea Hair Cream</h4>
        </div>
      </div>
    </Container>
  );
}

export default Home;
