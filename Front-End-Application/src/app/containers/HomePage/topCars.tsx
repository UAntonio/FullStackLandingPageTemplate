import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import { Car } from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
import carService from "../../services/carService";

const TopCarsContainer = styled.div`
${tw`
max-w-screen-lg
w-full
flex
flex-col
items-center
justify-center
pr-4
pl-4
md:pl-0
md:pr-0
mb-10
`}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
${tw`
w-full
flex
flex-wrap
justify-center
mt-7
md:mt-10
`}`;




export function TopCars() {

  const [current, setCurrent] = useState(0);

  useEffect(()=>{
    fetchTopCars();
  },[]);
  
  const fetchTopCars =async ()=>{
    //setLoading(true);
    const cars = await carService.getCars().catch((err)=>{
      console.log("Error" + err);
    })
  }

  const testCar3: ICar = {
    name: "TestName",
    mileage: "130k",
    thumbnailSrc: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2018_12/2371046/180320-flying-car-aeromobil50-se-143p-2371046.jpg",
    dailyPrice: 70,
    monthlyPrice: 1680,
    gearType: "Auto",
    gas: "Petrol"
  };
  const testCar2: ICar = {
    name: "TestName",
    mileage: "130k",
    thumbnailSrc: "https://cdn.vox-cdn.com/thumbor/3FOz-eKVF6XkJMhmMIbwE84hzHw=/0x0:2870x2116/920x613/filters:focal(1203x969:1661x1427):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg",
    dailyPrice: 70,
    monthlyPrice: 1680,
    gearType: "Auto",
    gas: "Petrol"
  };

  const cars = [
    (<Car {...testCar2} />),
    (<Car {...testCar3} />),
    (<Car {...testCar2} />),
    (<Car {...testCar2} />),
    (<Car {...testCar2} />)];

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberofDots = isMobile ? cars.length : Math.ceil(cars.length / 3)
  
  return <TopCarsContainer>
    <Title>Explore Our Top Deals</Title>
    <CarsContainer>
      <Carousel
        value={current}
        onChange={setCurrent}
        slides={cars}
        plugins={[
          "clickToChange",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,

            }
          }
        ]}
        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              }
            ]
          },
        }}
      />
      <Dots
        value={current}
        onChange={setCurrent}
        number={numberofDots} />
    </CarsContainer>
  </TopCarsContainer>

}