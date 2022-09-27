import Carousel from "react-bootstrap/Carousel";

function Carrousell() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/zbnf6QF/carrousel1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/5RQXNDg/carrousel2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/pXDfthP/carrousel3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/jGGSRmQ/carrousel4.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousell;
