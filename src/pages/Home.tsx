import { Container } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import PaginationControlled from "../components/Pagination";
import PortfolioImageList from "../components/Portfolio";
import { CustomeImageData } from "../models/Model";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    description: "Breakfast is the first meal of the day usually eaten in the morning.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    description: "A sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    description: "A camera is an optical instrument that captures a visual image.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    description: "Coffee is a drink prepared from roasted coffee beans.",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    description: "A hat is a head covering which is worn for various reasons, including protection against weather",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    description: "Honey is a sweet and viscous substance made by several bees, the best-known of which are honey bees.",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    description: "Basketball is a team sport ; Players advance the ball by bouncing it while walking or running (dribbling)",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    description: "A fern is a member of a group of vascular plants",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    description: "A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    description: "Tomato soup is a soup with tomatoes as the primary ingredient.",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    description: "Starfish or sea stars are star-shaped echinoderms belonging to the class Asteroidea",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    description: "A motorcycle, often called a motorbike, bike, cycle, or (if three-wheeled) trike",
  },
];

function Home() {
  const [data, setData] = useState<Array<CustomeImageData>>([]);
  useEffect(() => {
    let idata: Array<CustomeImageData> = itemData;     
    setData(idata);
  }, []);
  return (
    <Container maxWidth="xl">
      <PaginationControlled dataI={data}/>
       {/* <PaginationControlled
        render={(data: CustomeImageData[]) => <PortfolioImageList {...data} />}
      /> */}
      {/* <PortfolioImageList /> */}
      {/* <PaginationControlled /> */}
    </Container>
  );
}
export default Home;
