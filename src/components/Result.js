import React from 'react';
import {
  Box,
  Text,
  Center,
  chakra,
  Button,
  HStack,
  Flex,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Switch,
} from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { BsQuestionCircleFill } from 'react-icons/bs';

export default function Result() {
  return (
    <Flex
      overflowY={{ lg: 'hidden' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      h="100vh"
      bg="red"
    >
      <Box w={{ base: '100%', lg: '30%' }} bg="gray.100" h="100vh">
        <Center mt="8" borderBottom="2px" borderColor="white">
          <HStack pb="4" spacing={8} textAlign="center">
            <Box>
              <Text
                textShadow="1px 1px 4px gray"
                fontWeight="bold"
                fontSize="4xl"
              >
                85%
              </Text>
              <Text>Score</Text>
            </Box>
            <Box>
              <Text
                textShadow="1px 1px 4px gray"
                fontWeight="bold"
                fontSize="4xl"
              >
                01:30
              </Text>
              <Text>Time taken</Text>
            </Box>
            <Box>
              <Text
                textShadow="1px 1px 4px gray"
                fontWeight="bold"
                fontSize="4xl"
              >
                20
              </Text>
              <Text>Questions</Text>
            </Box>
          </HStack>
        </Center>
        <Tabs borderColor="transparent" colorScheme="whiteAlpha" align="center">
          <TabList mt="10" textColor="white">
            <Tab
              color="gray.200"
              _selected={{
                color: 'white',
                fontWeight: 'bold',
                textShadow: '1px 1px 4px gray',
              }}
              as={Button}
              borderLeftRadius="full"
              colorScheme="blue"
            >
              <Text fontWeight="light">Topics</Text>
            </Tab>
            <Tab
              color="gray.200"
              _selected={{
                color: 'white',
                fontWeight: 'bold',
                textShadow: '1px 1px 4px gray',
              }}
              as={Button}
              borderRightRadius="full"
              colorScheme="blue"
            >
              <Text fontWeight="light">Questions</Text>
            </Tab>
          </TabList>

          <TabPanels textAlign="left" as={Center} mt="10">
            <TabPanel as={Stack} spacing="4">
              <Flex
                justifyContent="space-between"
                w="300px"
                px="6"
                h="16"
                bg="white"
              >
                <Center>
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold">
                      Cells
                    </Text>
                    <Text fontSize="xs" fontStyle="italic">
                      Good performance
                    </Text>
                  </Box>
                </Center>
                <Center>
                  <Text color="#3182ce">
                    <chakra.span fontWeight="bold" fontSize="24">
                      8
                    </chakra.span>
                    /10
                  </Text>
                </Center>
              </Flex>
              <Flex
                justifyContent="space-between"
                w="300px"
                px="6"
                h="16"
                bg="white"
              >
                <Center>
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold">
                      Density
                    </Text>
                    <Text fontSize="xs" fontStyle="italic">
                      Excellent
                    </Text>
                  </Box>
                </Center>
                <Center>
                  <Text color="#3182ce">
                    <chakra.span fontWeight="bold" fontSize="24">
                      10
                    </chakra.span>
                    /10
                  </Text>
                </Center>
              </Flex>
              <Flex
                justifyContent="space-between"
                w="300px"
                px="6"
                h="16"
                bg="white"
              >
                <Center>
                  <Box>
                    <Text fontSize="sm" fontWeight="semibold">
                      Matter
                    </Text>
                    <Text fontSize="xs" fontStyle="italic">
                      Good performance
                    </Text>
                  </Box>
                </Center>
                <Center>
                  <Text color="#3182ce">
                    <chakra.span fontWeight="bold" fontSize="24">
                      5
                    </chakra.span>
                    /10
                  </Text>
                </Center>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box pt="4" p={{ lg: '8' }} w={{ base: '100%', lg: '70%' }} bg="#2d3e50">
        <Button
          color="gray.500"
          borderColor="gray.400"
          mt="2"
          right="10"
          pos={{ base: '', lg: 'absolute' }}
          variant="outline"
          rounded="full"
        >
          History
        </Button>
        <Tabs
          borderColor="transparent"
          colorScheme="whiteAlpha"
          textColor="white"
          align="center"
          minH="100vh"
        >
          <TabList w="30">
            <Tab
              _selected={{
                color: 'white',
                borderColor: 'white',
                borderBottomWidth: '6px',
              }}
            >
              All
            </Tab>
            <Tab
              _selected={{
                color: 'white',
                borderColor: 'white',
                borderBottomWidth: '6px',
              }}
              color="gray.300"
            >
              <AiFillCheckCircle color="green" />
              <Text ml="2" fontSize="10">
                Correctly <br /> Answered
              </Text>
            </Tab>
            <Tab
              _selected={{
                color: 'white',
                borderColor: 'white',
                borderBottomWidth: '6px',
              }}
              color="gray.300"
            >
              <MdCancel color="red" />
              <Text ml="2">
                Wrongly <br /> answered
              </Text>
            </Tab>
            <Tab
              _selected={{
                color: 'white',
                borderColor: 'white',
                borderBottomWidth: '6px',
              }}
              color="gray.300"
            >
              <BsQuestionCircleFill color="gray" />
              <Text ml="2">
                Not <br />
                answered
              </Text>
            </Tab>
          </TabList>

          <TabPanels mt="10">
            <TabPanel>
              <HStack spacing={2}>
                <Text fontWeight="bold" fontSize={{ base: '3xl', lg: '4xl' }}>
                  1.
                </Text>
                <Flex
                  justifyContent="space-between"
                  px={{ base: '4', lg: '10' }}
                  py="6"
                  bg="#222e3b"
                  minH="150"
                  textAlign="left"
                >
                  <Text w="80%" fontSize="sm">
                    In the state on atgrgregergregehrthrthrthtrtrrthrthtention,
                    find how manu decibels of In the state on
                    atgrgregergregehrthrthrthtrtrrthrthtention, find how manu
                    decibels of inattention, needed to distract someone who is
                    focused in life.
                  </Text>
                  <Flex
                    h="24"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Switch />
                    <MdCancel color="red" size="30" />
                  </Flex>
                </Flex>
              </HStack>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
