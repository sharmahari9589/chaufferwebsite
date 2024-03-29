import { Container, Row } from "react-bootstrap";
import style from "./Terms.module.css";
import DisclaimerMain from "../../../../../Images/DisclaimerMain.jpg";

const TermsAndCondition = () => {
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
            <li>1. General</li>
            <li>2. Contractual Relationship and Conclusion of Contract</li>
            <li>3. User Registration Requirements for the Use of BL Tools</li>
            <li>
              4. Selected Topics of the Contract of Carriage for the Benefit of
              the User
            </li>
            <li>5. Compensation and Payment</li>
            <li>6. Liability</li>
            <li>7. Changes to the Offer by Xactlane</li>
            <li>
              8. Protection of Content, Granting of Rights of Use to BL Tools
            </li>
            <li>9. Final Provisions</li>
          </ul>
          {/*  */}
          <div>
            <h4>1. General</h4>
            <p>
              Xactlane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred
              to as “Xactlane”) enables its Users to book travel services over
              its online platform, through the association with other online
              platforms, as well as through the applications for mobile devices
              (“Apps”, all products together, “BL Tools”). The service of
              Xactlane is made up only by the arrangement of an entitlement to
              carriage for a User over a transportation service provider (“TSP”)
              as an intermediate, and not in the provision of the travel service
              itself.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>
              These Terms and Conditions (hereinafter referred to as “Terms”)
              are part of every agreement between Users with the arrangement of
              a travel service by Xactlane. They also describe in detail the
              travel services which are offered through the direct entitlement
              created by Xactlane between the User and the TSP. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Deviations from the User
              Terms, even in the case of letters of confirmation and unreserved
              services, are hereby rejected. Only if the management of Xactlane
              has expressly agreed in writing, does this not apply.
            </p>
          </div>

          {/*  */}
          <div>
            <h4>2. Contractual Relationship and Conclusion of Contract</h4>
            <h5>2.1 Contractual Relationship</h5>
            <p>
              Xactlane provides the travel services presented by the BL Tools
              neither itself nor through third parties. Xactlane arranges for
              the User simply an entitlement to carriage over a TSP independent
              of Xactlane. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>Therefore, Xactlane makes
              the necessary arrangements with the TSP in its own name, which
              provides the User with an entitlement to carriage over the TSP
              ("Third-Party Beneficiary", also called "Contract of Carriage for
              the Benefit of the User"). Consequentially, Users are entitled to
              demand travel services and other claims directly from the TSP.{" "}
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>
              The User uses Xactlane only as an intermediate or an arranger and
              not as a transport service. The compensation claim of Xactlane is
              made up of arrangement fees as well as the advance payment made by
              Xactlane to the TSP.
            </p>

            <h5>2.2 Conclusion</h5>
            <p>
              By submitting a completed booking form via the BL Tools or by
              telephone (“Ride Request” of the User) to Xactlane the User makes
              an offer for the conclusion of an arrangement agreement. The
              object of this agreement is the arrangement of the travel service
              to meet the User’s Ride Request. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Xactlane next sends the
              User an email confirming the receipt of the ride details for the
              travel service which is to be arranged. Through this, Xactlane
              confirms only the receipt of the User’s Ride Request. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> The arrangement
              agreement between Xactlane and the User for the requested travel
              service comes into effect only through a separate statement
              ("Booking Confirmation") by Xactlane per email. The User
              themselves is then entitled to demand the transportation services
              from the TSP directly as well as to make further claims directly
              against the TSP.
            </p>
          </div>

          <div>
            <h4>3. User Registration Requirements for the Use of BL Tools</h4>
            <p>
              It is the User’s responsibility to ensure that all information
              that they, or someone else on their behalf, have provided to
              Xactlane is complete and accurate. Registration using automated
              methods is prohibited.
            </p>
          </div>

          <div>
            <h4>
              4. Selected Topics of the Contract of Carriage for the Benefit of
              the User
            </h4>
            <h5>
              4. Selected Topics of the Contract of Carriage for the Benefit of
              the User
            </h5>
            <p>
              The User can choose between transfer rides and hourly bookings for
              their Ride Request. If, according to the express wishes of the
              User, or guest, the actual Ride Request requires additional effort
              compared to the original Ride Request, the TSP should carry this
              out where possible. The extra effort may result in additional
              costs for the individual arrangement (for more details see
              Paragraph 5 below). <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>Changes in Travel
              Arrangements are subject to the availability of the TSP and can be
              made by the User, or the guest, even after conclusion of the
              contract in accordance with Paragraph 5 and the payments described
              therein.
            </p>
            <h5>4.1.1</h5>
            <p>
              In the case of transfer services the price quoted is valid for a
              start and destination address. An additional fee, according to the
              current price structure (see Paragraph 5 below), accrues per
              stopover on the direct route.
            </p>

            <h5>4.1.2</h5>
            <p>
              For hourly bookings, the trip must always end in the municipal
              area of the pickup location. An hourly booking always starts at
              the pick-up time confirmed upon booking.
            </p>

            <h5>4.2 Vehicle Class / Vehicle Model, Upgrade</h5>

            <p>
              The User can choose from different vehicle classes (e.g. “Business
              Class" ,"Business Van/SUV”, or "First Class") for their Ride
              Request. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> The vehicle images shown
              in the BL Tools are only illustrative examples. These are not
              connected with any right to a particular vehicle model for the
              booked vehicle category - regional differences are especially
              possible. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Subject to availability,
              an upgrade from the vehicle class "Business Class" to a higher
              vehicle class (such as "Business Van" or "First Class"), at no
              additional cost to the User, may be possible.
            </p>

            <h5>4.3 Transport Safety, Consequences</h5>

            <h5>4.3.1 Luggage, Animals</h5>

            <p>
              The price given in the Booking Confirmation includes the number of
              pieces of luggage specified on the booking form. Excess luggage,
              bulky luggage, or the transportation of animals not stated as an
              additional comment upon booking could lead to corresponding
              surcharges; the arrangement fee will also be higher, as stated in
              the Booking Confirmation (see Paragraph 5 below).
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> The TSP reserves the
              right to refuse the carriage of luggage and/or animals which
              was/were not agreed to. This also applies to animals which are not
              contained in a closed and suitable transport box.
            </p>

            <h5>4.3.2 Carriage of Children</h5>

            <p>
              The need for safety seats for children should be requested by the
              User as an additional comment by specifying the number and age of
              children to be transported as well as the required type of
              seating.
            </p>

            <h5>4.3.3 Information on Number of Guests and Pieces of Luggage</h5>

            <p>
              The maximum number of guests and pieces of luggage specified for a
              particular vehicle is an estimate based on factors such as size
              and weight of guest and luggage. These are therefore not binding.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>
              The TSP can refuse the carriage of guests or luggage if they
              believe they compromise the space and safety conditions.
            </p>

            <h5>4.3.4 Prevention of Carriage</h5>

            <p>
              The TSP reserves the right to refuse carriage if compelling (for
              example under applicable laws) requirements under Paragraph 4.3
              were not at all, or not correctly, communicated by the User as an
              additional comment. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>If, due to this, carriage
              is not possible, this has no influence on the payment of Xactlane
              through the arrangement agreement with the User for the
              transportation booked.
            </p>
          </div>

          <div>
            <h4>5. Compensation and Payment</h4>

            <h5>5.1 Principles</h5>

            <p>
              The compensation claim of Xactlane is specified in the Booking
              Confirmation. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Key factors for its
              amount (including reimbursement of expenses to Xactlane for the
              arranged transportation service) are: the chosen vehicle class,
              the distance, how far in advance the ride is booked, as well as
              the pickup time and possibly the location. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6>Additionally booked
              special requests, e.g. multilingual chauffeur, individual vehicle
              labeling, additional stops, bulky luggage, car seats for children,
              etc. may cause the price to increase.
            </p>
            <h5>5.2 Ride Changes</h5>

            <p>
              Even after the conclusion of the arrangement agreement and even
              after the start of the ride, provided it is possible for the TSP,
              the User (and the guest) can make changes to the Travel
              Arrangements.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> If a ride is
              spontaneously lengthened (distance or number of hours) according
              to the wish of the User, or guest, the actual service (total
              distance or number of hours) will be newly calculated and priced
              according to the current price structure. In the case of hourly
              bookings, each additional 30-minute block is considered for
              invoicing, i.e. from the first additional minute, a half hour will
              be rounded up to ensure more reliable planning.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Accordingly, the
              compensation claim increases for the User, due to Xactlane’s
              expenses for the Contract of Carriage for the Benefit of the User
              increasing.
              <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> If the distance or
              number of hours are less than originally booked, the price remains
              unaffected.
            </p>
          </div>

          <div>
            <h4>6. Liability</h4>

            <h5>6.1 Principles</h5>

            <p>
              Xactlane is liable for damage caused by Xactlane or their
              vicarious agents or subcontractors either intentionally or due to
              gross negligence. The TSP as well as all chauffeurs employed for
              the travel service are neither vicarious agents nor subcontractors
              of Xactlane. Rather, Xactlane arranges, for the User, a direct
              entitlement to carriage over a TSP. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> In case of damage caused
              by simple negligence, Xactlane is liable only for breach of
              fundamental contractual obligations and for foreseeable and
              typical damage. Fundamental contractual obligations are those
              which, when fulfilled, enable the proper execution of the contract
              and upon which the User can rely. <br />
              <h6 style={{ width: "100%" }}>&nbsp;</h6> Limitation of liability
              does not apply in the context of an express guarantee of condition
              and quality, in case of intentional harm to life, body, or health,
              as well as claims under the Product Liability Act.
            </p>

            <h5>6.2 Contents of BL Tools</h5>

            <p>
              Xactlane is not liable for the accuracy, reliability,
              completeness, or timeliness of the free content and programs which
              are distributed under the name of BL Tools, nor for any damage
              arising therefrom, except to the extent that such damages are
              caused intentionally or by gross negligence by Xactlane. This
              applies to all kinds of damage, especially damage caused by
              errors, delays or interruptions in the transmission, or problems
              with technical equipment and service, incorrect content,
              omissions, loss or deletion of data, viruses or in any other way
              due to the use of this online offer. Furthermore, Xactlane is not
              liable for the availability and efficiency of the features
              offered.
            </p>
          </div>
        </Row>
      </section>
    </Container>
  );
};

export default TermsAndCondition;
