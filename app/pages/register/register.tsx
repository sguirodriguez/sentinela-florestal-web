import { useState } from 'react';
import { Button, Input } from '../../components';
import { useNavigate } from 'react-router';
import { register as registerService } from '../../services/auth';
import {
  validateEmail,
  validateMinAge,
  validatePassword,
  validateRequired,
  formatBirthdayToISO,
} from '../../utils/validators';
import { RegisterIcon } from '../../assets/icons';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    if (!validateRequired(name)) {
      setError('Nome é obrigatório');
      return false;
    }

    if (!validateRequired(email) || !validateEmail(email)) {
      setError('Email inválido');
      return false;
    }

    if (!validatePassword(password)) {
      setError('Senha deve ter no mínimo 6 caracteres');
      return false;
    }

    if (!validateRequired(birthday)) {
      setError('Data de nascimento é obrigatória');
      return false;
    }

    if (!validateMinAge(birthday)) {
      setError('Usuário deve ter no mínimo 18 anos');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setIsLoading(true);
    await registerService({
      name,
      email,
      password,
      birthday: formatBirthdayToISO(birthday),
    });
    setIsLoading(false);

    navigate('/login');
  };

  const handleNavigateLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-header-icon">
            <RegisterIcon />
          </div>
          <p>Faça o cadastro para sua conta</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <Input
              id="name"
              type="text"
              placeholder="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={error}
              style={{ marginTop: '10px' }}
            />
            <Input
              id="birthday"
              type="date"
              placeholder="Data de nascimento"
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              error={error}
              style={{ marginTop: '10px' }}
            />
            <Input
              id="email-address"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: '10px' }}
            />
            <Input
              id="password"
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              style={{ marginTop: '10px' }}
            />
          </div>

          <div>
            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
            >
              Cadastrar
            </Button>
            <Button
              type="button"
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
              style={{ marginTop: '10px', backgroundColor: 'grey' }}
              onClick={handleNavigateLogin}
            >
              Voltar para login
            </Button>
          </div>
          <small>Obs: o usuário deve ter no mínimo 18 anos.</small>
        </form>
      </div>
    </div>
  );
};

export default Register;
