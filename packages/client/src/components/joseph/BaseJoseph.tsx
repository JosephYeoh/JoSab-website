import React from 'react';
import { weeklyBlogData } from './Joseph.data';
import { Flex, Text } from '@chakra-ui/core';
import color from 'util/color';

const BaseJoseph = () => {
  return (
    <Flex flexDir="column" px={'15vw'}>
      <Text textAlign="center" fontSize="56px">
        My Blog
      </Text>
      {weeklyBlogData.map((data, i) => (
        <Flex key={i} m={2} p={6} flexDir="column" border={`1px solid ${color.josephPrimary}`}>
          <Text fontSize="20px" fontWeight="bold" color={color.josephPrimary}>
            Week #{data.week} - {data.title}
          </Text>
          <Flex>
            <Text fontSize="18px" fontWeight="bold" minW="120px">
              Summary:
            </Text>
            <Text fontSize="18px">{data.description}</Text>
          </Flex>
          <Flex>
            <Text fontSize="18px" fontWeight="bold" minW="120px">
              Next Week:
            </Text>
            <Text fontSize="18px">{data.nextWeekPlan}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default BaseJoseph;
