import React from 'react';
import { Box, Text, VStack, Center, chakra, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" bg="#00c664" fontSize="xl">
      <Box
        onClick={() => {
          navigate('/diagnotics-test');
        }}
        pos="absolute"
        as={Button}
        right="0"
        w="26"
        bg="white"
        alt="logo"
        p="6"
        color="#00c664"
        style={{
          clipPath:
            'polygon(17% 2%, 100% 0, 100% 43%, 100% 95%, 68% 100%, 33% 100%, 14% 96%, 9% 86%, 9% 30%)',
        }}
      >
        Skip
      </Box>

      <>
        <VStack as={Center} h="100vh" spacing={10}>
          <Text color="white" fontSize="5xl" fontFamily="Hamelin">
            Welcome to the <br /> Adeo Experience
          </Text>
          <VStack spacing={6}>
            <Text color="white" fontSize="md" fontFamily="Harmonia">
              You currently have <br />
              <chakra.span fontWeight="bold">NO </chakra.span>
              Subscriptions
            </Text>
            <Text color="white" fontSize="md" fontFamily="Harmonia">
              First take a diagnostics test <br /> to determine the right course
              <br />
              for you.
            </Text>
          </VStack>
          <Button
            _hover={{
              bg: '#00964c',
              color: 'white',
            }}
            _active={{
              bg: '#00964c',
              transform: 'scale(0.8)',
              color: 'white',
            }}
            _focus={{
              borderColor: 'white',
            }}
            w="48"
            onClick={() => {
              navigate('/diagnotics-test');
            }}
            colorScheme="teal"
            rounded="full"
            size="lg"
            variant="outline"
            color="white"
          >
            Let's go
          </Button>
        </VStack>
      </>
    </Box>
  );
}
