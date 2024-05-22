import { FacebookLogo } from 'phosphor-react';
import { Input } from '../Common/Input';
import { Label } from '../Common/Label';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
    <main className="flex flex-col-reverse justify-center max-w-md mx-auto gap-10 items-center mt-10 sm:flex-row lg:justify-between ">
      <form className="flex flex-col items-center gap-4 p-5 w-full rounded-lg bg-blue-50 shadow-lg">
        <h1 className="text-2xl">Login</h1>

        <div className="flex flex-col w-full">
          <Label htmlFor="username" content="Usuário" />
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Digite seu usuário"
          />
        </div>

        <div className="flex flex-col w-full">
          <Label htmlFor="password" content="Senha" />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </div>

        <button className="bg-purple-700 text-white p-3 w-full rounded-lg cursor-pointer hover:bg-purple-800 transition duration-300 ease-in-out">
          Login
        </button>

        <p>ou entre com Facebook</p>

        <FacebookLogo
          size={50}
          weight="fill"
          className="text-blue-600 cursor-pointer"
        />
        <div>
          <h4>
            Ainda não tem uma conta?{' '}
            <NavLink
              to="/register"
              className="text-purple-500 font-extrabold cursor-pointer"
            >
              FAÇA UM CADASTRO
            </NavLink>
          </h4>
        </div>
      </form>
    </main>
  );
}
