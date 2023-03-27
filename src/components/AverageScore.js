import React from "react";
import styled, { keyframes, css } from "styled-components";

export default function AverageScore() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  return (
    <AppContainer>
        <Marquee>
          
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
    </AppContainer>
  );
}


const AppContainer = styled.div`
  width: 100vw;
  height: 100;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Marquee = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;
  flex-direction: row;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;


const MarqueeGroup = styled.div`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: space-around;
white-space: nowrap;
width: 100%;
height: 100%;
animation: ${scrollX} 20s linear infinite;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 100px;
  padding: 50px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;