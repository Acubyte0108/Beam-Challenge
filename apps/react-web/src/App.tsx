import { Outlet, Link } from "react-router";
import {
  BeamHeader,
  NavItem,
} from "@workspace/ui/components/beam-components/header";
import { BeamFooter } from "@workspace/ui/components/beam-components/footer";
import { BeamLogoDark } from "@workspace/ui/components/beam-components/icons";

const App = () => {
  const nextLinks: NavItem[] = [
    { component: <Link to="/">Home</Link> },
    { component: <Link to="/news">Newsroom</Link> },
    { component: <Link to="/about">About us</Link> },
    { component: <Link to="/services">Services</Link> },
  ];

  return (
    <main className="flex flex-col h-screen">
      <BeamHeader
        links={nextLinks}
        homeLogo={
          <Link to="/">
            <BeamLogoDark className="h-auto w-auto" />
          </Link>
        }
      />
      <div className="flex-1 w-full pt-20">
        <Outlet />
        <BeamFooter />
      </div>
    </main>
  );
};

export default App;
