import { useState } from "react";
import { Button, Header, Input } from "../../components";
import { useNavigate } from "react-router";

const EditAdress = () => {
  const navigate = useNavigate();
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>Sentinela Florestal</h2>
          <p>Edite seu endereço</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <Input
              id="street"
              type="street"
              placeholder="Rua"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              id="neighborhood"
              type="neighborhood"
              placeholder="Bairro"
              required
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
            <Input
              id="zipcode"
              type="zipcode"
              placeholder="CEP"
              required
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
            <Input
              id="number"
              type="text"
              placeholder="Número"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
            <Input
              id="state"
              type="state"
              placeholder="Estado"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
            <Input
              id="City"
              type="City"
              placeholder="Cidade"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
          </div>

          <div>
            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
            >
              Salvar
            </Button>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAdress;
