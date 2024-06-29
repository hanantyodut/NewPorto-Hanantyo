import PortoFooter from "./_components/footer";
import Navigation from "./_components/navbar";
import RocketButton from "./_components/rocket";

type Props = { children: React.ReactNode };
export default function HomeTemplate({ children }: Props) {
  return (
    <div className="bg-[#cccccc] dark:bg-black transition-colors duration-300">
      <Navigation />
      <main className="min-h-[60dvh] p-5">{children}</main>
      <RocketButton />
      <PortoFooter />
    </div>
  );
}
