import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [userAvatar, setUserAvatar] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validações básicas
    if (!email.includes('@')) {
      setError('Por favor, insira um email válido.');
      return;
    }

    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError('A senha deve conter pelo menos uma letra maiúscula.');
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError('A senha deve conter pelo menos um número.');
      return;
    }

    // Simulação de login
    if (email === 'user@example.com' && password === 'Password123') {
      setIsLoggedIn(true);
      setUserAvatar('https://blog.portalpos.com.br/app/uploads/2022/12/como-tirar-uma-foto-profissional-para-o-linkedin.jpg');
      setError('');
    } else {
      setError('Credenciais inválidas');
    }
  };

  const handleSocialLogin = async (provider: any) => {
    try {
      const result = await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      setUserAvatar(result.user.photoURL || 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png');
    } catch (error) {
      console.error('Erro ao fazer login com rede social:', error);
      setError('Erro ao fazer login com rede social');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="avatar">
          {isLoggedIn ? (
            <img src={userAvatar!} alt="User Avatar" />
          ) : (
            <img src='https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png' alt="Default Avatar" />
          )}
        </div>
        <h2>{isLoggedIn ? 'Bem vindo de volta!' : 'Login'}</h2>
        {!isLoggedIn && (
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <div className="input-icon">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon-img" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu Email"
                  required
                  />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Senha:</label>
                  <div className="input-icon">
                    <FontAwesomeIcon icon={faLock} className="input-icon-img" />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Digite sua Senha"
                      required
                    />
                  </div>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="rememberMe">Continuar logado</label>
                </div>
                <button className="send" type="submit">Entrar</button>
              </form>
            )}
        {!isLoggedIn && (
          <>
          <div className="login-links">
            <a href="/forgot-password" className="forgot-password">Esqueceu sua senha?</a>
            <span className="register-link">
              Novo aqui? <a href="/register">Cadastre-se</a>
            </span>
            </div>
            <div className="social-login">
              <p className="social-login-text">Ou entre com:</p>
              <div className="social-icons">
                <FontAwesomeIcon 
                  icon={faGoogle} 
                  className="social-icon google-icon"
                  onClick={() => handleSocialLogin(googleProvider)} 
                />
                <FontAwesomeIcon 
                  icon={faFacebook} 
                  className="social-icon facebook-icon"
                  onClick={() => handleSocialLogin(facebookProvider)} 
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;