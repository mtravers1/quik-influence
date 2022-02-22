import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { bgThemeColor } from "utils/constants/colorConstants";
import LeadsForm from "components/Leads/LeadsForm";
import { useRouter } from "next/router";

const CloseFriendsCampaign = () => {
  const { query } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Box as="section" bgColor={bgThemeColor[colorMode]}>
      <Box as="section">
        <Flex height="100vh">
          <Box
            width="55%"
            position="relative"
            display={["none", "block"]}
            as="div"
          >
            <Image
              src="https://res.cloudinary.com/alliance-software-development/image/upload/v1644875376/quik-and-dasha_ruzxcn.jpg"
              alt="Get exclusive content of Baby Dream"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box width={["100%", "45%"]}>
            <Flex
              width="full"
              height="full"
              justifyContent="center"
              alignItems={["unset", "center"]}
              p={6}
              pt={["10rem", "0"]}
            >
              <Box maxW="440px">
                <Heading py={8} fontFamily="montserrat">
                  Get exclusive content of Baby Dream
                </Heading>
                <LeadsForm campaignId={query.campaignId as string} />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CloseFriendsCampaign;
