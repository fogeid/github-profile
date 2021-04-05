import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { Form } from './styles';

function Select() {
  const [search, setSearch] = useState('');
  const { getUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      getUser(search);
    };
  };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Div>
          <Form.Div.Input
            type="text"
            name="github_id"
            required
            placeholder="Enter the github user"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <Form.Div.Button type="submit">Search</Form.Div.Button>
        </Form.Div>
      </Form>
  );
}

export default Select;