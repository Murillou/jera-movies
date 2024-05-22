import popcornIcon from '../../assets/browser-icon.png';

export function Header() {
  return (
    <header className="flex items-center gap-5 justify-center max-w-md mx-auto p-5 font-bold text-4xl border-b-2 border-b-slate-500 mb-10 mt-36 ">
      <h1>Jera Movies</h1>
      <img className="w-14" src={popcornIcon} alt="" />
    </header>
  );
}
