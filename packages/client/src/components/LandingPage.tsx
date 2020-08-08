import { Flex, Icon, Text } from '@chakra-ui/core';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import color from 'util/color';
import {
  CoolAngledSlash,
  CoolBackground,
  CoolJosephHorizontal,
  CoolSabrinaHorizontal,
  NameButton,
  CoolUL,
  CoolLI
} from './LandingPage.styles';

const LandingPage = () => {
  const router = useRouter();
  Array(40).map((c) => console.log('got'));
  return (
    <Flex style={{ height: '100vh', width: '100vw' }}>
      <Background>
        <Flex p={5} align="center" justify="center">
          <Text color="white" fontWeight="bold" fontSize={[ 24, 30, 56 ]}>
            Who are you looking for ?
          </Text>
        </Flex>
        <Flex display="-webkit-box" height="100%" flexDir="column" align="center" justify="center">
          <Flex
            flexDir="column"
            position="relative"
            height={[ 300, 400, 500 ]}
            width={[ 300, 400, 500 ]}
            align="center"
            justify="center"
          >
            <CoolJosephHorizontal flex="1" align="flex-start" justify="flex-start">
              <NameButton onClick={() => router.push('/joseph')} align="center">
                <Icon name="chevron-left" size={'48px'} color={color.josephPrimary} />
                <Text color={color.josephPrimary} fontWeight="bold" fontSize={[ 16, 28, 40 ]}>
                  Joseph
                </Text>
              </NameButton>
            </CoolJosephHorizontal>
            <CoolAngledSlash minHeight={[ 408, 550, 690 ]} />
            <CoolSabrinaHorizontal flex="1" align="flex-end" justify="flex-end">
              <NameButton onClick={() => router.push('/sabrina')} align="center">
                <Text color={color.sabrinaPrimary} fontWeight="bold" fontSize={[ 16, 28, 40 ]}>
                  Sabrina
                </Text>
                <Icon name="chevron-right" size={'48px'} color={color.sabrinaPrimary} />
              </NameButton>
            </CoolSabrinaHorizontal>
          </Flex>
          <Flex height={[ 100, 150, 200 ]} />
        </Flex>
      </Background>
    </Flex>
  );
};

export default LandingPage;

const Background: React.FC<{}> = (props) => {
  return (
    <CoolBackground>
      <CoolUL>
        {Array.from({ length: 15 }, (a, i) => (
          <CoolLI
            key={i}
            left={`${random(2, 35)}%`}
            size={random(20, 80)}
            delay={`${random(0, 30)}s`}
            duration={`${random(16, 30)}s`}
          />
        ))}
        {Array.from({ length: 15 }, (a, i) => (
          <CoolLI
            key={i}
            left={`${random(65, 98)}%`}
            size={random(20, 80)}
            delay={`${random(0, 30)}s`}
            duration={`${random(16, 30)}s`}
          />
        ))}
      </CoolUL>
      <Flex flexDir="column" flex={1}>
        {props.children}
      </Flex>
    </CoolBackground>
  );
};

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
