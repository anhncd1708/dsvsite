import { Helmet } from "react-helmet-async";
import HomeView from "../view/Home_view";
// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Home </title>
      </Helmet>
      <HomeView />
    </>
  );
}
