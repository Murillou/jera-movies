import { FacebookLogo } from 'phosphor-react';
import watchingFilm from '../../assets/girl-watching.webp';

export function Login() {
  return (
    <main className="flex flex-col-reverse justify-center gap-10 items-center bg-base-bg mt-10 sm:flex-row ">
      <section>
        <img
          className="w-72"
          src={watchingFilm}
          alt="Casal assistindo filme com pipoca na mão"
        />
      </section>

      <section className="w-full sm:w-auto">
        <form className="flex flex-col items-center gap-4 p-5 mx-2 rounded-lg bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 h-full">
          <h1 className="text-2xl">Login</h1>

          <div className="flex flex-col w-full">
            <label htmlFor="username">Usuário</label>
            <input type="text" name="username" id="username" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />
          </div>

          <input
            className="bg-purple-600 p-3 w-full rounded-lg"
            type="submit"
            value="Login"
          />

          <p>ou entre com Facebook</p>

          <FacebookLogo
            size={50}
            weight="fill"
            className="text-blue-600 cursor-pointer"
          />
          <div>
            <h4>
              Ainda não tem uma conta? Faça um{' '}
              <span className="text-green-500">CADASTRO</span>
            </h4>
          </div>
        </form>
      </section>
    </main>
  );
}
