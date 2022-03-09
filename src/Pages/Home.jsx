import React from 'react'
import { Flex,Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";

import AppLayout from '../Components/AppLayouts/AppLayoutThree';
import AppCard from '../Components/AppComponents/AppCard';
import AppBarRight from '../Components/AppBars/AppBarRight';
import AppBarSide from '../Components/AppBars/AppBarSide';

function Home() {
  const {LeftLayout,MainLayout,RightLayout} = AppLayout();

  return (
      <>
      <Text> <Link to="/about">About</Link> </Text>
      <Flex height="99vh">
        {LeftLayout(AppBarRight)}
        {MainLayout(AppCard)}
        {RightLayout(AppBarSide)}
        
      </Flex>
    </>
  )
}

export default Home