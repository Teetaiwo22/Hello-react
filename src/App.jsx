import Accordion from "react-bootstrap/Accordion";

const App = () => {
  return (
    <>
      <h1>Welcome to React Demo</h1>

      <div>
        <h3>FAQ Section</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Supermart.ng?</Accordion.Header>
            <Accordion.Body>
              Supermart.ng is an online grocery delivery service that allows you
              shop from as many as 10,000 items. Our well-trained Personal
              Shoppers carefully pick your groceries and deliver them to you at
              home or at the office.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How Does Supermart.ng Work?</Accordion.Header>
            <Accordion.Body>
            Customers can shop on Supermart.ng for items such as fruits, vegetables, meat, 
            toiletries, medicines, office supplies, snacks, drinks and everything else you’ll 
            find in a typical mega-supermarket. When customers add items to their basket, 
            they have the choice of selecting their preferred delivery window. The website is 
            user-friendly and the service is interactive; we keep customers updated at every 
            stage of the processing of their order.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Will You Deliver To My Area?</Accordion.Header>
            <Accordion.Body>
            We currently serve most parts of Lagos, covering mainly central areas like Ajao Estate, 
            Alausa, Anthony Village, Gbagada, Ijora, Ikeja, Ikoyi, Ilupeju, Ketu, Lagos Island, Lekki, 
            Magodo, Maryland, Mushin, Ogba, Ogudu, Ojodu Berger, Ojota, Omole, Oniru Estate, Oregun, 
            Oshodi, Somolu, Surulere, Victoria Island, Yaba. If your preferred delivery address is not 
            within our current coverage area, you may provide an alternative delivery address that is 
            centrally located (perhaps your office or the home of a relative or friend that you visit frequently).
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>When Will I Receive My Order?</Accordion.Header>
            <Accordion.Body>
            At checkout, you are able to select a delivery window when you'll like your order to be delivered. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default App;
