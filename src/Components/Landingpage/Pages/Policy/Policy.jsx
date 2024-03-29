import { Container, Row } from "react-bootstrap";
import style from "./Policy.module.css";
import DisclaimerMain from "../../../../../Images/DisclaimerMain.jpg";

const Policy = () => {
  return (
    <Container>
      <section>
        <Row
          className={style.DisclaimerMain}
          style={{ backgroundImage: `url(${DisclaimerMain})` }}
        >
          <h1>
            xactlane’s
            <br /> <span>Terms and Conditions</span>
          </h1>
        </Row>
      </section>

      <section>
        <Row className={style.termsMain}>
          <h1 style={{ display: "flex", alignItems: "end" }}>
            Privacy Policy
            <svg
              width="11"
              height="10"
              style={{ marginBottom: "4px" }}
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.28498 9.91176C7.92737 9.91176 10.0695 7.69293 10.0695 4.95588C10.0695 2.21882 7.92737 0 5.28498 0C2.6426 0 0.500488 2.21882 0.500488 4.95588C0.500488 7.69293 2.6426 9.91176 5.28498 9.91176Z"
                fill="#0BC36B"
              />
            </svg>
          </h1>

          <p>
            Please note: The English translation of the Xactlane Terms and
            Conditions is provided for the convenience of our non
            German-speaking customers. Regardless of this, only the original
            German-language version is legally binding. In New York City,
            Xactlane GmbH does not dispatch trips directly to chauffeurs in
            order to comply with the regulations of the New York City Taxi and
            Limousine Commission (the “TLC”). Xactlane operates in New York City
            exclusively through our network of TLC-licensed For-Hire Vehicle
            Bases, which can be viewed by clicking here
          </p>

          <ul>
            <li>1. Scope</li>
            <li>2. Name and Contact Information of the Controller</li>
            <li>3. Contact Information for the Data Protection Officer</li>
            <li>4. Data Security</li>
            <li>5. Provision of the websites</li>
            <li>6. Cookies, pixels and similar technologies</li>
            <li>7. Special Features for the Xactlane Apps</li>
            <li>8. Social Media/Social Networks</li>
            <li>
              9. Data Processing During Registered Use of Xactlane Services and
              Booking Rides
            </li>
            <li>10. Payment & Fraud Prevention</li>
            <li>11. Communication with Xactlane</li>
            <li>12. E-mail Advertising, Newsletter</li>
            <li>13. Involvement of Data Processors by Xactlane</li>
            <li>14. Rights of Data Subjects</li>
            <li>15. Automated decisions</li>
            <li>16. Data Erasure and Storage Duration</li>
            <li>17. Amendment or Update of this Privacy Policy</li>
          </ul>
          {/*  */}
          <div>
            <h4>1. Scope</h4>

            <p>
              We, Xactlane GmbH ("Xactlane"), take the protection of your
              personal data seriously and protect your privacy when processing
              them in accordance with the applicable data protection
              regulations. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> This privacy policy
              informs you as a visitor of the Xactlane websites, as a user or
              customer of the online platform of Xactlane, a Xactlane App or
              other services of Xactlane (together also "Xactlane Services")
              which of your personal data is processed by Xactlane and for which
              purpose. The Xactlane Services are not aimed at minors. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>
              Information on the processing of personal data of chauffeurs can
              be found in the Chauffeur Privacy Policy (e.g. in the BL Chauffeur
              App).
            </p>
          </div>

          {/*  */}
          <div>
            <h4>2. Name and Contact Information of the Controller</h4>
            <p>
              The controller for the processing of data within the meaning of
              the General Data Protection Regulation (GDPR) is:
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Xactlane GmbH
              <br />
              Feurigstrasse 59
              <br /> 10827 Berlin
              <br /> Germany
              <br /> E-Mail: info@xactlane.com
            </p>
            <p style={{ marginTop: "10px" }}>
              You can find further information on Xactlane in the Legal Notice
            </p>
          </div>

          <div>
            <h4>3. Contact Information for the Data Protection Officer</h4>
            <p>
              Our data protection officer is: <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Bernhard Kloos, HK2
              Comtection GmbH, Hausvogteiplatz 11 A, 10117 Berlin <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> You can contact our data
              protection officer confidentially by mail to the above-mentioned
              address. Alternatively, you can contact our data protection
              officer and our data protection crew by e-mail to:
              dataprotection@xactlane.com.
            </p>
          </div>

          <div>
            <h4>4. Data Security</h4>
            <h5>
              4. Selected Topics of the Contract of Carriage for the Benefit of
              the User
            </h5>
            <p>
              Xactlane uses appropriate technical and organizational security
              measures to ensure a level of protection for personal data
              appropriate to the risk, taking into account the state of the art,
              implementation costs and the nature, scope, context and purposes
              of processing as well as the risk of varying likelihood and the
              degree of risk. The transfer of personal data between your end
              device and Xactlane is generally carried out in an encrypted form
              (TLS encryption). You can identify an encrypted connection for
              example by the lock symbol in the address line of your browser.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> If you communicate with
              us by e-mail, access by third parties cannot be ruled out.
              Xactlane also uses transport encryption for e-mails in general.
              But in the case of confidential information, Xactlane recommends
              using the postal way or fully encrypted e-mail communication
              (PGP). Please let us know if you would like to correspond with us
              by e-mail in an encrypted form so that we can give you information
              on the relevant addresses and public keys.
            </p>
          </div>

          <div>
            <h4>5. Provision of the websites</h4>

            <p>
              When visiting Xactlane websites for information purposes, i.e.
              even without your registration, data is automatically collected
              regarding the usage through your browser (hereinafter “surf
              data”). This includes your IP address, the status code, the
              Xactlane websites visited, date and time of the server request,
              browser type and browser version, referrer (website visited
              beforehand), files transferred and data volume. The surf data is
              stored by Xactlane in so-called log files. If you visit Xactlane
              websites without having a Xactlane account, we will not know who
              you are. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> We inform you about the
              cookies and analysis services used by Xactlane in section 6.
              Otherwise, your surf data will not be provided to third
              parties.The processing of surf data is mainly carried out to
              establish and maintain the technical connection when surfing the
              internet. This data is also used by Xactlane in a pseudonymized or
              anonymized form in order to analyze the use of our websites, to
              design and improve the Xactlane services to meet demand, to
              recognize and eliminate technical or process-related disruptions
              and problems and to prevent illegal use of the Xactlane services
              (e.g. fraudulent booking, cyberattacks). <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Stored log files are
              erased or anonymized, provided they are no longer required to
              ensure the general functionality of Xactlane services. Xactlane
              retains the log files only insofar as you have consented to this
              or if there are legal retention obligations. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> The legal basis for the
              processing of personal data when providing websites is Art. 6
              Paragraph 1 lit f GDPR (Xactlane’s legitimate interest). Insofar
              you are a Xactlane user or customer, the legal basis is also Art.
              6 para. 1 lit. b DSGVO (contract performance, see otherwise below
              number 9.). If you have consented to an extended usage of your
              surf data, the legal basis is Art. 6 Paragraph 1 lit. a GDPR (your
              consent). You can revoke your consent at any time.
            </p>
          </div>

          <div>
            <h4>6. Cookies, pixels and similar technologies</h4>

            <p>
              When using Xactlane services, cookies, pixels or similar methods
              may be used. This is common for most large websites.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Cookies are small text
              files and pixels are small graphic files which can be stored on
              the user's end device. You will find comprehensive information on
              the cookies, pixels and similar methods used by Xactlane in our
              Cookie Policy.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> As part of your use of
              Xactlane Services, Xactlane sets the cookies that are necessary
              for Xactlane to provide a feature you request (e.g., language,
              login status, cookie consent). Xactlane also uses, where you have
              consented, its own and third party cookies to analyze and improve
              the use of the Xactlane Services, to improve and personalize
              functionality to you, to detect and correct malfunctions and
              problems of a technical or process nature, to prevent unlawful use
              of the Xactlane Services (e.g. fraudulent booking, cyber-attacks)
              and for marketing purposes. (including the measurement, analysis
              and evaluation of advertising). The details of this can be found
              in our Cookie Policy. Your consent to the setting and use of
              cookies by Xactlane is documented electronically via a Consent
              Management Tool or Consent Management Platform (CMP) used by
              Xactlane. You can revoke your consent at any time with future
              effect or change your cookie settings; the easiest way to do this
              is to change your cookie settings as you wish in the CMP used by
              Xactlane.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Additionally, you can
              prevent the storage of cookies and delete existing cookies at any
              time in the settings of your browser. However, this may lead to
              the fact that individual functions of the Xactlane Services are
              not or only partially available. The storage period varies per
              cookie and can be viewed in your browser in our Cookie Policy.
            </p>
          </div>

          <div>
            <h4>7. Special Features for the Xactlane Apps</h4>
            <p>
              Xactlane’s apps are another access point to Xactlane services.
              Similar processing of personal data is generally carried out via
              the Xactlane apps as via the Xactlane websites (see number 5
              above) or in the case of registered use of the Xactlane Services
              (see number 9). <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> When using the Xactlane
              apps, Xactlane may also access additional data in relation to the
              app or to your end device, such as e.g. the device name, device
              manufacturer, model, operating system, app or SDK version, mode.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>
              There are also push notifications in the Xactlane apps, i.e.
              notifications provided by Xactlane in the app of your end device.
              You will only receive push notifications if you have given your
              consent to this on your end device. The legal basis for the data
              processing is Art. 6 Paragraph 1 lit a GDPR (your consent). <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> There is a special
              Xactlane App ("BL Chauffeur") for drivers or driving service
              providers working with Xactlane. You can find information on the
              processing of personal data carried out by means of BL Chauffeur
              in the Chauffeur Privacy Policy.
            </p>
          </div>

          <div>
            <h4>8. Special Features for the Xactlane Apps</h4>

            <h5>8.1 Xactlane’s Social Media Presence</h5>
            <p>
              Xactlane maintains pages in social networks such as Twitter,
              LinkedIn or Facebook. The respective provider of the social
              network provides detailed information about which personal data is
              processed and how. In addition, please see our notes on our pages
              on the respective platforms.
            </p>

            <h5>8.2 Facebook, Facebook Messenger and Facebook Connect</h5>

            <p>
              Xactlane uses services of the social network, Facebook operated by
              Meta Platforms Inc., 1601 Willow Road, Menlo Park, CA 94025, USA
              ("Facebook"). The controller for the data processing in Europe for
              Facebook is Facebook Ireland Ltd., 4 Grand Canal Square, Grand
              Canal Harbour, Dublin 2, Ireland. You can access Facebook’s data
              protection information here:
              https://www.facebook.com/about/privacy/
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> You can contact us and
              exchange messages with Xactlane via Facebook Messenger.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Xactlane also provides
              the option of logging in to the Xactlane account using Facebook
              Connect. In order to do this, you will be sent to a Facebook page
              where you may log in using your Facebook user information. If you
              log in to the Xactlane account using Facebook Connect, certain
              personal data will be transferred by Facebook to Xactlane.
              Facebook will inform you regarding what data will be transferred,
              for the purpose of which you may grant or refuse explicit consent.
              Personal data will not be transferred by Facebook to Xactlane
              without this consent. Facebook can also determine from your login
              via Facebook Connect that you have logged in with us and when you
              have done so. Xactlane uses the data transmitted by Facebook in
              order to identify you. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> __If you actively choose
              to log in via Facebook, you consent to Xactlane processing, in a
              personalized form, the data transmitted by Facebook to identify
              you in connection with your account. This consent may be revoked
              at any time without any additional costs and with effect for the
              future. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>__ You also have the
              option at any time to adjust the usage of Facebook Connect and log
              in to your Xactlane account in another manner. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Xactlane uses, where you
              have consented to this, Facebook Custom Audiences from lists to
              show you targeted advertising via Facebook. Xactlane creates lists
              of existing contacts and uploads them to Facebook via Xactlane's
              Facebook account. Before uploading, the list is hashed locally in
              the browser and only then sent to Facebook. There it is compared
              with Facebook's existing list of hashed IDs of Facebook users. The
              matches are then added to Xactlane's Custom Audience. Facebook
              does not collect any new personal data. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> The legal basis for the
              processing of personal data when using Facebook Connect is in each
              case Art. 6 Paragraph 1 lit a GDPR (your consent). <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> We will inform you in
              our Cookie Policy about Facebook’s cookies, pixels and similar
              technologies which are used by Xactlane.
            </p>

            <h5>8.3 Google Customer Match</h5>

            <p>
              Xactlane uses the Customer Match service of Google LLC, 1600
              Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google").
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> At Google Customer
              Match, Xactlane creates lists of existing contacts and uploads
              them to Google via Xactlane's Google Account. Before uploading,
              the list is hashed locally in the browser with the SHA256
              algorithm and only then transmitted to Google with TLS encryption.
              There it is compared with existing Google Accounts. The matches
              are then added to the Xactlane Audience. On this basis we can
              display targeted advertising via Google Ads.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> The legal basis for
              processing personal data when using Google Customer Match is Art.
              6 para. 1 lit. a GDPR (your consent).
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> We will inform you about
              cookies and similar procedures of Google, which are used by
              Xactlane, in our Cookie Policy.
            </p>
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default Policy;
