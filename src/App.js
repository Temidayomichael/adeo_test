import React, { useEffect, useState } from 'react';
import { Center, ChakraProvider, extendTheme, Spinner } from '@chakra-ui/react';
import Welcome from './pages/welcome';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Diagnostics from './pages/Diagnostics';
import TestData from './contexts/TestData';
import Axios from 'axios';
import { PropagateLoader } from 'react-spinners';

const theme = extendTheme({
  divider: {
    size: '100px',
    colorScheme: 'red',
  },
});

function App() {
  const [testData, setTestData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get(
      'https://adeo.app/api/questions/get?level_id=1&course_id=1&limit=20'
    )
      .then(response => {
        console.log(response.data.data);
        setTestData(response.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(' App testData:', testData);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Center h="100vh" w="100vw" bg="#00c664">
          <PropagateLoader color="white" />
        </Center>
      ) : (
        <TestData.Provider value={testData}>
          <Router>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="diagnotics-test" element={<Diagnostics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TestData.Provider>
      )}
    </ChakraProvider>
  );
}

export default App;
