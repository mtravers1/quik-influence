import {
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Header from 'components/Header';
import Head from 'next/head';
import { themeColor } from 'utils/constants/colorConstants';

const PrivacyPolicy = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Privacy Policy - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header type="unauthenticated" color={themeColor[colorMode]} />
      <Container height="100%" color="black">
        <Flex direction="column">
          <Stack my={10}>
            <Text fontWeight="bold" fontSize="6xl">
              Privacy Policy
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              Quik Influence is committed to protecting your privacy and
              developing technology that gives you the most powerful and safe
              online experience. This Statement of Privacy applies to the Quik
              Influence Web site and governs data collection and usage. By using
              the Quik Influence website, you consent to the data practices
              described in this statement.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">Collection of your Personal Information</Heading>
            <Text fontSize="2xl">
              Quik Influence collects personally identifiable information, such
              as your e-mail address, name, home or work address or telephone
              number. Quik Influence also collects anonymous demographic
              information, which is not unique to you, such as your ZIP code,
              age, gender, preferences, interests and favourites.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              There is also information about your computer hardware and
              software that is automatically collected by Quik Influence. This
              information can include your IP address, browser type, domain
              names, access times and referring Web site addresses. This
              information is used by Quik Influence for the operation of the
              service, to maintain the quality of the service, and to provide
              general statistics regarding the use of the Quik Influence Web
              site.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              Please keep in mind that if you directly disclose personally
              identifiable information or personally sensitive data through Quik
              Influence public message boards, this information may be collected
              and used by others. Note: Quik Influence does not read any of your
              private online communications.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              Quik Influence encourages you to review the privacy statements of
              Web sites you choose to link to from Quik Influence so that you
              can understand how those Web sites collect, use and share your
              information. Quik Influence is not responsible for the privacy
              statements or other content on Web sites outside of the Quik
              Influence and Quik Influence family of Web sites.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">Use of your Personal Information</Heading>
            <Text fontSize="2xl">
              Quik Influence collects and uses your personal information to
              operate the Quik Influence Web site and deliver the services you
              have requested. Quik Influence also uses your personally
              identifiable information to inform you of other products or
              services available from Quik Influence and its affiliates. Quik
              Influence may also contact you via surveys to conduct research
              about your opinion of current services or of potential new
              services that may be offered.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              Quik Influence has the right to sell, rent or lease its customer
              lists to third parties if they choose to. Quik Influence may, from
              time to time, contact you on behalf of external business partners
              about a particular offering that may be of interest to you. In
              those cases, your unique personally identifiable information
              (e-mail, name, address, telephone number) is not transferred to
              the third party. In addition, Quik Influence may share data with
              trusted partners to help us perform statistical analysis, send you
              email or postal mail, provide customer support, or arrange for
              deliveries. All such third parties are prohibited from using your
              personal information except to provide these services to Quik
              Influence, and they are required to maintain the confidentiality
              of your information.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              Quik Influence does not use or disclose sensitive personal
              information, such as race, religion, or political affiliations,
              without your explicit consent.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              Quik Influence keeps track of the Web sites and pages our
              customers visit within Quik Influence, in order to determine what
              Quik Influence services are the most popular. This data is used to
              deliver customized content and advertising within Quik Influence
              to customers whose behaviour indicates that they are interested in
              a particular subject area.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              Quik Influence websites will disclose your personal information,
              without notice, only if required to do so by law or in the good
              faith belief that such action is necessary to: (a) conform to the
              edicts of the law or comply with legal process served on Fuor
              Digital or the site; (b) protect and defend the rights or property
              of Quik Influence; and, (c) act under exigent circumstances to
              protect the personal safety of users of Quik Influence, or the
              public.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">Security of your Personal Information</Heading>
            <Text fontSize="2xl">
              Quik Influence secures your personal information from unauthorized
              access, use or disclosure. Quik Influence secures the personally
              identifiable information you provide on computer servers in a
              controlled, secure environment, protected from unauthorized
              access, use or disclosure. When personal information (such as a
              credit card number) is transmitted to other Web sites, it is
              protected through the use of encryption, such as the Secure Socket
              Layer (SSL) protocol.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">Changes to this Statement</Heading>
            <Text fontSize="2xl">
              Quik Influence will occasionally update this Statement of Privacy
              to reflect company and customer feedback. Quik Influence
              encourages you to periodically review this Statement to be
              informed of how Quik Influence is protecting your information.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">Contact Information</Heading>
            <Text fontSize="2xl">
              Quik Influence welcomes your comments regarding this Statement of
              Privacy. If you believe that Quik Influence has not adhered to
              this Statement, please contact Quik Influence at
              marketing@quikinfluence.com. We will use commercially reasonable
              efforts to promptly determine and remedy the problem.
            </Text>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
