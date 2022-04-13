import React, { useState, useContext } from 'react';
import {
  Box,
  VStack,
  Center,
  chakra,
  Button,
  HStack,
  Flex,
  useRadio,
  useRadioGroup,
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import TestData from '../contexts/TestData';
import parse from 'html-react-parser';
import { MdTimerOff } from 'react-icons/md';
import Result from '../components/Result';
import { useTimer } from 'reactjs-countdown-hook';

export default function Diagnostics() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const testData = useContext(TestData);
  console.log('testData:', testData);

  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return (
      <Box as="label">
        <input {...input} />
        <Box
          fontFamily="Harmonia"
          {...checkbox}
          cursor="pointer"
          _checked={{
            bg: '#222e3b',
            color: 'white',
            opacity: '1',
            borderColor: 'blue.200',
          }}
          w="lg "
          _focus={{
            boxShadow: 'outline',
          }}
          color="white"
          opacity="0.6"
          h={20}
          as={Center}
          fontSize="3xl"
          textAlign="center"
          p="4"
          textTransform="capitalize"
        >
          {props.children}
        </Box>
      </Box>
    );
  }
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // extract ansers array from object
  const answers = testData[currentQuestion].answers.map(answer => {
    let str = answer.text.replace(/<[^>]*>?/gm, '');
    return str;
  });
  const questionText = parse(testData[currentQuestion].text);
  // const questionIndex = currentQuestion + 1;
  const totalQuestions = testData.length;

  console.log(answers);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: value => {
      console.log(value.answerText);
      console.dir(JSON.stringify(value));
    },
  });

  const handleAnswerOptionClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < testData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const group = getRootProps();

  const { seconds, minutes } = useTimer(20 * 60, handleTimerFinish);

  function handleTimerFinish() {
    onOpen();
  }

  return !showScore ? (
    <Flex
      flexDirection="column"
      fontFamily="Harmonia"
      bg="#2d3e50"
      h="100vh"
      overflowY={{ lg: 'hidden' }}
      overflowX="hidden"
    >
      <AlertDialog
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              textAlign="center"
              color="red"
              fontSize="lg"
              fontWeight="bold"
            >
              <MdTimerOff size="30" /> Time Out!
            </AlertDialogHeader>

            <AlertDialogBody textAlign="center">
              You've been timed out. Your test is over.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                _hover={{
                  bg: '#00c664',
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
                bg="#00c664"
                color="white"
                borderRadius="0"
                onClick={() => {
                  setShowScore(true);
                  onClose();
                }}
                ml={3}
              >
                Proceed to results
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Box
        pos="absolute"
        right="0"
        w="26"
        bg="white"
        alt="logo"
        p="4"
        color="#00c664"
        fontSize="2xl"
        fontWeight="Bold"
        style={{
          clipPath:
            'polygon(17% 2%, 100% 0, 100% 43%, 100% 95%, 68% 100%, 33% 100%, 14% 96%, 9% 86%, 9% 30%)',
        }}
      >
        {`${minutes ? minutes : '00'} : ${seconds ? seconds : '00'}`}
      </Box>
      <Flex py="10px" color="white" bg="#00c664">
        <Center>
          <HStack
            fontWeight="Bold"
            fontSize="3xl"
            color="white"
            ml="4"
            spacing={4}
          >
            {[...Array(totalQuestions)].map((_, index) => {
              return (
                <Box
                  key={index}
                  as="span"
                  borderBottom={index === currentQuestion ? '1px' : '0'}
                  borderBottomWidth={
                    index === currentQuestion ? 'thick' : 'thick'
                  }
                  opacity={index === currentQuestion ? '1' : '0.5'}
                  fontSize="2xl"
                  fontWeight="Bold"
                  px={2}
                  py={1}
                  _hover={{
                    bg: '#00c664',
                    color: 'white',
                  }}
                >
                  {index + 1}
                </Box>
              );
            })}

            {/* <Box
              w="10"
              borderBottom="1px"
              borderBottomWidth="thick"
              textAlign="center"
            >
              <Text>1</Text>
            </Box>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text> */}
          </HStack>
        </Center>
      </Flex>
      <chakra.span fontFamily="Harmonia" color="white">
        <Center h="28" textAlign="center" p="4" fontSize="xl" bg="#222e3b">
          {questionText}
        </Center>
        <Center h="16" bg="#66717d">
          Choose the correct answer to the following above
        </Center>
      </chakra.span>

      <VStack
        h="100%"
        alignItems="center"
        spacing={10}
        justifyContent="center"
        {...group}
      >
        <Stack minH="350">
          {answers.map((value, key) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={key} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </Stack>
        <Center mt="8" as={HStack} spacing="1">
          <Button
            _hover={{
              bg: '#00c664',
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
            bg="#00c664"
            size="lg"
            color="white"
            borderRadius="0"
            onClick={() =>
              currentQuestion === 0
                ? currentQuestion
                : setCurrentQuestion(currentQuestion - 1)
            }
          >
            Previous
          </Button>
          {currentQuestion + 1 === testData.length ? (
            <Button
              _hover={{
                bg: '#00c664',
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
              bg="#00c664"
              size="lg"
              color="white"
              borderRadius="0"
              onClick={() => handleAnswerOptionClick(true)}
            >
              Finish
            </Button>
          ) : (
            <Button
              _hover={{
                bg: '#00c664',
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
              bg="#00c664"
              size="lg"
              color="white"
              borderRadius="0"
              onClick={() => handleAnswerOptionClick(true)}
            >
              Next
            </Button>
          )}
        </Center>
      </VStack>

      {/* </Center> */}
    </Flex>
  ) : (
    <Result />
  );
}
