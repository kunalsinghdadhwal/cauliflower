import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  token: string;
  callback_url: string;
}

export default function VerificationEmail({
  username,
  token,
  callback_url,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Thank you! Verify your email address to complete your registration</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>Thank you for registering. Please use the following verification code to complete your registration</Text>
        </Row>
        <Row style={{ textAlign: "center", margin: "20px 0" }}>
          <Button
            href={`${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${callback_url}`}
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
           Verify Here 
          </Button>
        </Row>
      </Section>
    </Html>
  );
}
