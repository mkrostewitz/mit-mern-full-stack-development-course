// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
  const { Button, Container, Row, Col } = ReactBootstrap;
  const filter = menuitems.filter((n) => n % 2 === 1);
  const updatedList = filter.map((listItems, index) => {
    return (
        <Button type="button" className="btn btn-primary" key={index.toString()}>{listItems}</Button>
    )
  });
  // note that React needs to have a single Parent
  return (
    <Container fluid>
      <Row className="row justify-content-start">
        <Col className="col-4">
          {updatedList}
        </Col>
      </Row>
    </Container>

  )
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
