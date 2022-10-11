import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import quikColorConstants from 'utils/constants/colorConstants';

interface ISummary {
  application?: string;
  totalSubscribers?: number;
  timeToLive: number;
  scheduled?: any;
  timezone?: string;
}

const Summary = ({
  application,
  totalSubscribers,
  timeToLive,
  scheduled,
  timezone,
}: ISummary) => {
  return (
    <Box py="2rem">
      <Text mb="0.8rem" fontSize="1.2rem">
        Awesome, we're ready to start sending your message to
        <Text as="span" fontWeight="semibold" mx="2">
          {totalSubscribers}
        </Text>
        subscribers! This message will be sent to the subscribers of
        <Text
          as="span"
          mx="2"
          color={quikColorConstants.influenceRedWithOpacity}
        >
          {application}
        </Text>
      </Text>

      {timeToLive && (
        <Text mb="0.8rem" fontSize="1.2rem">
          You've also set a Time-to-Live of{' '}
          <Text as="span" mx="2" fontWeight="semibold">
            {Math.round(timeToLive / 60)} {` `}
            minutes
          </Text>
          in the additional setting of the message. This will cause the message
          to be alive longer when users are offline at the time of sending.
        </Text>
      )}

      {scheduled && (
        <Text mb="0.8rem" fontSize="1.2rem">
          You've also scheduled this message to be sent at{' '}
          <Text as="span" fontWeight="semibold" mx="2">
            {scheduled} {timezone}
          </Text>
        </Text>
      )}

      {/* <Text mb="0.8rem" fontSize="1.2rem">
        To complete the message you've also set a vibration pattern of Short
        buzz" for this message. This will give the message a unique feel, so
        your subscribers know that it's your message.
      </Text> */}
    </Box>
  );
};

export default Summary;
