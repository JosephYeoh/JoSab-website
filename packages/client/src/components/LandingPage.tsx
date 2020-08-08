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
  CoolLI,
  CoolSVGWrapper,
  CoolRect,
  NameIcon,
  NameText
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
              <CoolHoverButton>
                <NameButton onClick={() => router.push('/joseph')} align="center">
                  <NameIcon name="chevron-left" size={'48px'} color={color.josephPrimary} />
                  <NameText m={0} color={color.josephPrimary} fontWeight="bold" fontSize={[ 16, 28, 40 ]}>
                  Joseph
                  </NameText>
                </NameButton>
              </CoolHoverButton>
            </CoolJosephHorizontal>
            <CoolAngledSlash minHeight={[ 408, 550, 690 ]} />
            <CoolSabrinaHorizontal flex="1" align="flex-end" justify="flex-end">
              <CoolHoverButton isSabrina>
                <NameButton onClick={() => router.push('/sabrina')} align="center">
                  <NameText m={0} color={color.sabrinaPrimary} fontWeight="bold" fontSize={[ 16, 28, 40 ]}>
                  Sabrina
                  </NameText>
                  <NameIcon name="chevron-right" size={'48px'} color={color.sabrinaPrimary} />
                </NameButton>
              </CoolHoverButton>
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

const CoolHoverButton:React.FC<{isSabrina?:boolean}> = props => {
  const { isSabrina } = props;
  return(
    <CoolSVGWrapper
      isSabrina={isSabrina} 
      style={{
        justifyContent: isSabrina? 'flex-end' : 'flex-start',
      }}>
      <svg style={{ position:'absolute' }} height="55" width="220" xmlns="http://www.w3.org/2000/svg">
        <CoolRect isSabrina={isSabrina} className="shape" height="55" width="220" />
      </svg>
      {props.children}
    </CoolSVGWrapper>
  );
};

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
