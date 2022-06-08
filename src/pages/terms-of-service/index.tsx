import {
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import CustomButton from 'components/Button';
import Header from 'components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { themeColor } from 'utils/constants/colorConstants';

const TermsOfService = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Terms of Service - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header type="unauthenticated" color={themeColor[colorMode]} />
      <Container height="100%" color="black">
        <Flex direction="column">
          <Stack my={10}>
            <Text fontWeight="bold" fontSize="6xl">
              Terms Of Service
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">1. Copy Approval</Heading>
            <Text fontSize="2xl">
              The advertiser must deliver to Quik Influence the content of the
              advertisement. Advertiser is contracting Quik Influence to
              broadcast (the copy) not less than 3 days prior to the desired
              email broadcast date. All Copies shall be subject to Quik
              Influence’s approval. Quik Influence reserves the right to reject
              any Copy that advertises or promotes any product or service
              involving illegal activity, illegal products, illegal product
              paraphernalia, sexual paraphernalia, adult films or other media,
              gambling weapons, illicit activities, chain letters, pyramid
              fundraising or similar types of material. By reserving this right,
              Quik Influence shall not be legally obligated to any failure to
              advise Advertiser of the nature of any such Copy.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">2. Details of Broadcast</Heading>
            <Text fontSize="2xl">
              The email messages broadcast by Quik Influence shall identify the
              source of the recipient's data collection and shall contain an
              opt-out feature that allows the recipient to communicate
              electronically and by direct mail his or her desire to be removed
              from the Quik Influence (or affiliate) database.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">3. Hardware, Software and Database List</Heading>
            <Text fontSize="2xl">
              Quik Influence (or affiliate) shall obtain and maintain the
              computer hardware and software necessary to perform its
              obligations under these Terms and Conditions. Such hardware and
              software shall not be dedicated hardware or software. Nothing in
              these Terms and Conditions shall grant any right, title or
              interest in or to the Quik Influence (or affiliate) database,
              hardware or software.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">4. Payment</Heading>
            <Text fontSize="2xl">
              Advertiser or Client shall pay in full the fees charged by Quik
              Influence in the insertion order or invoice based on the terms
              provided. You can view the terms on each actual invoice. Any late
              payments will accrue an interest equal to two per cent (2%) per
              month. All accounts not paid within ninety (90) days of the
              invoice due date may be remanded to a collection agency and
              charged an additional Thirty-Three (33%) per cent on top of the
              outstanding balance, or the maximum permissible by law.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">
              Payment Terms & Credit/Debit Card Authorization.
            </Heading>
            <Text fontSize="2xl">
              Credit/Debit Card Authorization. By agreeing to the terms and
              conditions of this Agreement you automatically authorize the
              Company to assess/charge Fees against your credit/debit card
              provided by you hereunder. You undertake to provide the Company
              with complete and accurate billing and contact information and to
              keep such information up-to-date. Failure of the recurring payment
              process does not absolve your payment obligations. Fees, assessed
              against the Client’s credit/debit card or paid by the Client under
              the present Agreement, are non-refundable. There will be interest
              charges on any Fees/amounts which you fail to pay when due at the
              rate of 1.5% a month. Should any Fee/amount, for any reason,
              remain unpaid, the Company reserves the right, at its sole
              discretion, to terminate the present Agreement with or without a
              written notice given to you.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">
              Chargeback Prevention and Billing Disputes.
            </Heading>
            <Text fontSize="2xl">
              The Parties hereby acknowledge, understand and agree that
              chargebacks generally constitute a remedy used by any licensee in
              regards to fraudulent transactions, or when there is a
              violation/breach by a licensor of any of the provisions of the
              agreement entered into between any such licensee and the licensor.
              Thus, considering the foregoing, except for reasons of fraudulent
              use by the Company of the Client’s credit/debit card information
              or of a material violation/breach by the Company of the present
              Agreement, the Client hereby agrees and undertakes not to dispute
              any Fee/charge assessed by the Company against the Client’s
              credit/debit card. Should the Client have any questions or
              objections regarding any Fee/charge assessed by the Company
              against the Client’s credit/debit card, the Client shall
              immediately contact the Company and try to solve/settle this issue
              in the most amicable and transparent manner possible. The Company
              shall then provide the Client with good explanations within a
              reasonable amount of time.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">5. Indemnification</Heading>
            <Text fontSize="2xl">
              Advertiser shall indemnify, defend and hold harmless Quik
              Influence against all third party claims, actions and liabilities
              (including all reasonable costs, expenses and attorney fees)
              arising from or in connection with (a) Advertisers products(s),
              services or the content of the Advertisers copy, including without
              limitation any claim alleging any violations of any third party's
              intellectual property rights: or (b) Advertisers breach of any of
              its obligations, representations or warranties under these Terms
              and Conditions. Quik Influence shall promptly notify Advertiser in
              writing of all such claims and shall accommodate Advertiser's
              reasonable requests for cooperation and information.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">6. Warranties</Heading>
            <Text fontSize="2xl">
              Quik Influence makes no warranty whatsoever as to the email
              advertisements, expressed or implied. Advertiser acknowledges and
              agrees that there are no guarantees of success on email marketing
              SMS marketing or any other marketing campaigns. Like any form of
              traditional advertisement, email marketing has its successes and
              failures due to marketing conditions and other factors. Quik
              Influence cannot be held liable for unsuccessful marketing
              campaigns outside of its immediate control. The client agrees that
              Quik Influence does not guarantee any marketing success or results
              and holds Quik Influence harmless and will indemnify from any
              consequences of the marketing campaign.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">7. Limitation of Liability</Heading>
            <Text fontSize="2xl">
              In no event shall Quik Influence be liable for indirect, special,
              exemplary, consequential, incidental or punitive loss, damage or
              expense (including lost profits). The limit of Quik Influence’s
              liability (whether in contract, tort, negligence, strict liability
              in tort or by statute or otherwise) for any and all claims related
              to these terms and conditions shall not in the aggregate exceed
              the fees paid to Quik Influence under the invoice.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">8. Force Majeure</Heading>
            <Text fontSize="2xl">
              Neither party shall be liable for delays or nonperformance of
              these Terms and Conditions if any delay or nonperformance was
              caused by: (a) act of God, act of war, strike, fire, natural
              disaster, or accident: (b) lack of availability of materials,
              fuel, utilities: or ( c ) any other cause beyond such party's
              control.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">9. Assignment</Heading>
            <Text fontSize="2xl">
              Neither party may assign its rights or obligations under these
              Terms and Conditions without the prior written consent of the
              other party.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">10. Relationship of Parties</Heading>
            <Text fontSize="2xl">
              The parties are independent contracting entities, and there is no
              partnership or agency relationship between them.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">11. Entire Agreement</Heading>
            <Text fontSize="2xl">
              Except as expressly modified or supplemented by a writing executed
              by both parties, the Terms and Conditions described herein and the
              invoice specifically incorporating these Terms and Conditions are
              the only representations, warranties, and understanding between
              the parties with respect to the products and/or services described
              herein. In the event of any conflict between these Terms and
              Conditions and any other document (including without limitation,
              the Invoice and any Advertiser invoice, insertion order or
              purchase order), the provisions of these Terms and Conditions
              shall govern. The waiver of any right, breach, or default shall
              not constitute a waiver of any other right or any subsequent
              breach or default.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">12. Disputes</Heading>
            <Text fontSize="2xl">
              This agreement is entered into in the County of Broward, State of
              Florida, and any and all legal actions are taken with regard to or
              pursuant to this agreement shall be filed in the County of Palm
              Beach, State of Florida.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">13. Severability</Heading>
            <Text fontSize="2xl">
              Should any provisions of these Terms and Conditions be found
              invalid or unenforceable, all such provisions are to be enforced
              to the maximum extent permitted by law, and beyond such extent
              shall be deemed severed from these Terms and Conditions without
              affecting the validity or enforceability of any other provision.
            </Text>
          </Stack>
          <Stack mb={10}>
            <Heading size="lg">14. Headings</Heading>
            <Text fontSize="2xl">
              The headings of these Terms and Conditions are for convenience
              only and shall not be used to construe the meaning of this
              agreement.
            </Text>
          </Stack>
          <Stack flexDirection={['column', 'row']} mb={10}>
            <CustomButton
              css={[
                css`
                  margin-top: unset !important;
                `,
              ]}
              onClick={() => {
                router.query.terms = 'checked';
                router.push(`/signup?${queryString.stringify(router.query)}`);
              }}
            >
              I agree with the terms
            </CustomButton>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default TermsOfService;
