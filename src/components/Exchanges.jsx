import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {server} from "../main.jsx";
import { Container, HStack, VStack, Heading, Text, Image } from '@chakra-ui/react';
import Loader from './Loader.jsx';
import ErrorComponent from './ErrorComponent.jsx';


const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  const fetchExchanges = async() =>{
    try {
      const {data} = await axios.get(`${server}/exchanges`)
      setExchanges(data)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  };
  fetchExchanges()
}, [])

if (error) return <ErrorComponent message = {"Error while fetching Echanges"} />


  return (
    <Container maxW={"container.xl"} >
      {loading ? <Loader /> : <>
      
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {exchanges.map((data) => (
          <ExchangeCard 
            key = {data.id}
            name = {data.name}
            img= {data.image}
            rank = {data.trust_score_rank}
            url = {data.url} 
          />

        ))}
      </HStack>

      </>}
    </Container>
  )
}

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
      <a href={url} target='blank'>
          <VStack 
            w={"52"} 
            shadow={"lg"} 
            p={"8"} 
            borderRadius={"lg"} 
            transition={"all 0.3s"}
            m={"4"}
            css={{
              "&:hover" : {
                transform: "scale(1.2)"
              },
            }}
          >
              <Image
               src={img}
               w={"10"} 
               objectFit={"contain"} 
               alt={"Exchange"} 
              />
          <Heading size={"md"} noOfLines={1} >
              {rank}
          </Heading>

          <Text noOfLines={1}>{name}</Text>

          </VStack>
      </a>

  )
}



export default Exchanges
