import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Endpoints
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">traffic-change</Dropdown.Item>
        <Dropdown.Item href="#/action-2">domain</Dropdown.Item>
        <Dropdown.Item href="#/action-3">attack-layer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;