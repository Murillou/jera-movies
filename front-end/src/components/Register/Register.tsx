import { NavLink } from 'react-router-dom';
import { Input } from '../Common/Input';
import { Label } from '../Common/Label';

export function Register() {
  return (
    <main className="flex justify-center max-w-md mx-auto ">
      <form className="flex flex-col items-center gap-4 p-5 w-full rounded-lg bg-blue-50 shadow-lg">
        <h1 className="text-2xl font-extrabold">Cadastro</h1>

        <div className="flex flex-col w-60 sm:w-72">
          <Label htmlFor="username" content="Usuário:" />
          <Input
            type="text"
            placeholder="Digite seu nome de usuário"
            id="username"
          />
        </div>

        <div className="flex flex-col w-60 sm:w-72">
          <Label htmlFor="birthday" content="Informe sua data de nascimento:" />
          <Input type="date" />
        </div>

        <div className="flex flex-col w-60 sm:w-72 ">
          <Label htmlFor="email" content="E-mail:" />
          <Input type="email" placeholder="Digite seu e-mail" id="email" />
        </div>

        <div className="flex flex-col w-60 sm:w-72 ">
          <Label htmlFor="password" content="Senha:" />
          <Input type="password" placeholder="Digite sua senha" id="password" />
        </div>

        <button className="bg-purple-700 text-white p-3 w-60 rounded-lg cursor-pointer hover:bg-purple-800 transition duration-300 ease-in-out sm:w-72">
          Cadastrar
        </button>

        <div className="flex flex-col items-center">
          <h3>Já tem um cadastro? </h3>
          <NavLink
            to="/"
            className="text-purple-500 font-extrabold cursor-pointer"
          >
            CLIQUE AQUI PARA FAZER LOGIN
          </NavLink>
        </div>
      </form>
    </main>
  );
}
