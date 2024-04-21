import React from "react";
import { Box, Flex, Heading, Text, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaChartPie, FaRegCalendarAlt, FaUsers, FaDollarSign, FaCog } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box p={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">
          Dashboard
        </Heading>
        <Button leftIcon={<Icon as={FaCog} />} colorScheme="blue">
          Settings
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={6}>
        <Stat p={6} bg={cardBg} borderRadius="md" boxShadow="base">
          <StatLabel display="flex" alignItems="center">
            <Icon as={FaUsers} mr={2} />
            Users
          </StatLabel>
          <StatNumber>1,200</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat p={6} bg={cardBg} borderRadius="md" boxShadow="base">
          <StatLabel display="flex" alignItems="center">
            <Icon as={FaDollarSign} mr={2} />
            Sales
          </StatLabel>
          <StatNumber>$58,200</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.4%
          </StatHelpText>
        </Stat>

        <Stat p={6} bg={cardBg} borderRadius="md" boxShadow="base">
          <StatLabel display="flex" alignItems="center">
            <Icon as={FaChartPie} mr={2} />
            Conversion
          </StatLabel>
          <StatNumber>5.2%</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            1.12%
          </StatHelpText>
        </Stat>

        <Stat p={6} bg={cardBg} borderRadius="md" boxShadow="base">
          <StatLabel display="flex" alignItems="center">
            <Icon as={FaRegCalendarAlt} mr={2} />
            Appointments
          </StatLabel>
          <StatNumber>85</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            18.75%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <Flex direction={{ base: "column", md: "row" }} spacing={6}>
        <Box flex="2" bg={cardBg} borderRadius="md" boxShadow="base" p={6} mr={6}>
          <Heading as="h3" size="lg" mb={6}>
            Revenue
          </Heading>
          <Text mb={6}>An overview of your earnings and income generated over time.</Text>
          {/* Placeholder for chart */}
          <Box h="200px" bg="gray.200" borderRadius="md"></Box>
        </Box>
        <Box flex="1" bg={cardBg} borderRadius="md" boxShadow="base" p={6}>
          <Heading as="h3" size="lg" mb={6}>
            Tasks
          </Heading>
          <Text mb={6}>Your upcoming tasks and deadlines.</Text>
          {/* Placeholder for tasks */}
          <Box h="200px" bg="gray.200" borderRadius="md"></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
