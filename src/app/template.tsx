import PortoFooter from "./_components/footer";
import Navigation from "./_components/navbar";

type Props = { children: React.ReactNode };
export default function HomeTemplate({ children }: Props) {
  return (
    <>
      <Navigation />
      <main className="min-h-[60dvh] p-5 bg-[#cccccc] dark:bg-black transition-colors duration-300">
        {children}
      </main>
      <PortoFooter />
    </>
  );
}
