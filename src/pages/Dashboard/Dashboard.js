import React from "react";
import "./dashboard.css";
import Container from "react-bootstrap/esm/Container";
import CardSection from "../../components/Card/Card";
import PlanSection from "../../components/PlanSection/PlanSection";
import Header from "../../components/Header/Header";
const Dashboard = () => {
  let title1 = "Basic";
  let title2 = "Standard";
  let title3 = "Premium";

  let subtitle1 = "89.99";
  let subtitle2 = "189.99";
  let subtitle3 = "389.99";

  let price1 = "9.99";
  let price2 = "99.99";
  let price3 = "199.99";

  let user1 = "25";
  let user2 = "60";
  let user3 = "100";

  let storage1 = "25";
  let storage2 = "60";
  let storage3 = "100";

  let email1 = "Email Support";
  let email2 = "Email+Chat Support";
  let email3 = "Email+Chat+Whatsapp Support";

  let plan1 = "Free Starter";
  let plan2 = "Enterprise Plan";

  let value1 = "Free Forever";
  let value2 = "Let's Connect";

  let discription1 =
    "The quickest and easiest way to try Protocols with basic functionalities";
  let discrition2 =
    "Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success";

  let planuser1 = "8";
  let planuser2 = "75";
  let planstorage = "3";

  let basicdetail1 =
    "Basic of Documents, Task Flow, Voting, Accounting, Banking, Notes Investor, Director ang Team Management included";
  let basicdetail2 = "Customization of all other feetures";
  return (
    <div className="home__container__wrapper" style={{ position: "relative" }}>
      <Header></Header>

      <div className="bell__style">
        <div className="bell__container__Wrapper">
          <i className="fa-solid fa-bell fa-shake fa-xl "></i>
        </div>
      </div>

      <div className="rectangle-section__style"></div>
      <div className="plus-section__style">
        <i
          class="fa-solid fa-plus"
          style={{
            color: "#eb34a4",
          }}></i>
      </div>
      <Container className="dashboard__container">
        <div className="dashboard__uppersection">
          <div className="dashboard__uppersection-left">
            <div className="content__left-section">
              <h5 className="heading__style mb-5">
                Choose a plan that's just right for You !
              </h5>
            </div>
            <div className="card__Wrapper__top-section">
              <CardSection
                title={title1}
                subtitle={subtitle1}
                price={price1}
                user={user1}
                storage={storage1}
                email={email1}></CardSection>
              <CardSection
                title={title2}
                subtitle={subtitle2}
                price={price2}
                user={user2}
                storage={storage2}
                email={email2}
                style={{
                  backgroundColor: "rgb(209 42 42 / 55%)",
                }}></CardSection>
              <CardSection
                title={title3}
                subtitle={subtitle3}
                price={price3}
                user={user3}
                storage={storage3}
                email={email3}
                style={{
                  backgroundColor: "rgb(227 29 231 / 45%)",
                }}></CardSection>
            </div>

            <div className="card__bottom__section mt-4">
              <PlanSection
                plan={plan1}
                value={value1}
                discription={discription1}
                planuser={planuser1}
                planstorage={planstorage}
                basicdetail={basicdetail1}></PlanSection>
              <PlanSection
                plan={plan2}
                value={value2}
                discription={discrition2}
                planuser={planuser2}
                basicdetail={basicdetail2}
                storagestyle={{
                  display: "none",
                }}
                style={{
                  backgroundColor: "rgb(42 120 209 / 59%)",
                }}></PlanSection>
            </div>
            <div className="footer__wrapper">
              <p className="footer__style">
                *some unique features are provided as add-ons with individual
                plans for each features
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
