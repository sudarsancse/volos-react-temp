// Pages and Components
import Landing from "../pages/";
import Navbar from "../components/Navbar";

// ------------------
interface NavbarProps {
  isLanding: boolean;
  name: string;
  number: string;
  email: string;
  address: string;
}
/**
 * Render Navigation bar when rendering a component and isLanding to check
 * if the component to be rendered is the landing page or not.
 *
 * In landing page case: nav links works as scrollable links
 * other case(such as : blog): nav links works as router links
 *
 * @param component the component to be rendered
 * @param isLanding check for a component if its the landingpage
 * @returns the given component with the Navbar
 */
const renderWithNav = (
  component: JSX.Element,
  isLanding: boolean
): JSX.Element => {
  const navbarProps: NavbarProps = {
    isLanding: isLanding,
    name: "John doe",
    number: "+91-9212321321",
    email: "portfolio3@gmail.com",
    address: "Los Angeles , America",
  };
  return (
    <>
      <Navbar {...navbarProps} />
      {component}
    </>
  );
};

type RoutesType = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
  {
    path: "/",
    element: renderWithNav(<Landing />, true),
  },
];

export default routes;

// ---------------
