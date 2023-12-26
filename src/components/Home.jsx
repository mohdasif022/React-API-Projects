import React from 'react';
import {Box, Image, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import img from "../img/coinPhoto.png"


const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
       
          src={img}
          alt="coin"
          boxSize={"100%"}
          objectFit={"contain"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-15"}
      >
        CoinBitzz
      </Text>
    </Box>
  );
};

export default Home;