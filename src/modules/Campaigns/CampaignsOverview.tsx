import React from "react";
import {
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure
} from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "components/Button";
import { useRouter } from "next/router";
import quikColorConstants, {
  borderThemeColor
} from "utils/constants/colorConstants";
import { campaignCreations } from "utils/constants/campaignCreationConstants";
import CurrentCampaignsTable from "./CurrentCampaignsTable";

type CampaignSendTypes = "Email" | "SMS" | "Default";

const CampaignsOverview = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateCampaign = (type: CampaignSendTypes | string) => {
    onClose();

    switch (type) {
      case "SMS":
        return router.push("/dashboard/campaigns/create/sms");
      case "Email":
        return router.push("/dashboard/campaigns/create/email");
      default:
        router.push("/dashboard/campaigns/create");
    }
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW="40vw"
          minH="30vh"
          p="8"
          border={`1px solid ${borderThemeColor[colorMode]}`}
          borderRadius={0}
        >
          <ModalBody>
            <HStack mb="10" height="100%">
              <Heading>Create A New Campaign </Heading>
            </HStack>
            <HStack>
              {campaignCreations.map((campaignCreation) => (
                <Flex
                  key={`capign_creation_${campaignCreation.name}`}
                  border={`1px solid ${quikColorConstants.influenceRedWithOpacity}`}
                  w="12rem"
                  h="6rem"
                  borderRadius="md"
                  justifyContent="space-evenly"
                  alignItems="center"
                  _hover={{
                    bg: quikColorConstants.grey
                  }}
                  onClick={() => handleCreateCampaign(campaignCreation.label)}
                >
                  <FontAwesomeIcon
                    icon={campaignCreation.icon as IconProp}
                    fontSize={20}
                    color={quikColorConstants.influenceRed}
                  />
                  <Text fontWeight="bold">{campaignCreation.label}</Text>
                </Flex>
              ))}
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex flexDirection="column">
        <Heading size="xl"> Campaigns Dashboard</Heading>
        <CustomButton width="25rem" my="12" onClick={onOpen}>
          <FontAwesomeIcon
            icon={faPlus as IconProp}
            style={{ paddingRight: "1rem" }}
          />
          Create a New Campaign
        </CustomButton>

        <Flex flexDirection="column" mt="12">
          <CurrentCampaignsTable />
        </Flex>
      </Flex>
    </>
  );
};

export default CampaignsOverview;
