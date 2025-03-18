import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Book1 from "./components/Book1";
import Book2 from "./components/Book2"; // Imported Book2 component
import Book3 from "./components/Book3";
import Book4 from "./components/Book4";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Login from "./components/Login";
import Student1 from "./components/Bookstudent1";
import Student2 from "./components/Bookstudent2";
import Student3 from "./components/Bookstudent3";
import Student4 from "./components/Bookstudent4";
import Note1 from "./components/Note1";
import Note2 from "./components/Note2";
import Note3 from "./components/Note3";
import Note4 from "./components/Note4";
import Notestudent1 from "./components/Notestudent1";
import Notestudent2 from "./components/Notestudent2";
import Notestudent3 from "./components/Notestudent3";
import Notestudent4 from "./components/Notestudent4";
import CircularAdmin from "./components/circularadmin";
import CircularUser from "./components/circularuser";
import JournalsUser from "./components/Journaluser";
import JournalsAdmin from "./components/Journaladmin";
import UserList from "./components/userlist";
import FormAddUser from "./components/formadduser";
import Users from "./components/users";
import FormEditUser from "./components/formedituser";
import ClassBridge from "./components/classbridge";
import Chatbot from "./components/chatbot";
import Contentarea from "./components/navigation";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          {/* Home page route showing all components */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Pricing />
                <Roadmap />
                <Footer />
              </>
            }
          />
          
          {/* Route for First Year Books showing only Header and Book1 */}
          <Route
            path="/firstyear"
            element={
              <>
                <Header />
                <Book1 />
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          {/* Route for Second Year Books */}
          <Route
            path="/secondyear"
            element={
              <>
                <Header />
                <Book2 /> {/* Component for Second Year Books */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />
          
          <Route
            path="/thirdyear"
            element={
              <>
                <Header />
                <Book3 /> {/* Component for Second Year Books */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

<Route
            path="/finalyear"
            element={
              <>
                <Header />
                <Book4 /> {/* Component for Second Year Books */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />
          {/* Route for First Year Student */}
          <Route
            path="/firstyearstudent"
            element={
              <>
                <Header />
                <Student1 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          {/* Route for Second Year Student */}
          <Route
            path="/secondyearstudent"
            element={
              <>
                <Header />
                <Student2 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/thirdyearstudent"
            element={
              <>
                <Header />
                <Student3 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/finalyearstudent"
            element={
              <>
                <Header />
                <Student4 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

           <Route
            path="/firstyearnotes"
            element={
              <>
                <Header />
                <Note1 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/secondyearnotes"
            element={
              <>
                <Header />
                <Note2 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

            <Route
            path="/thirdyearnotes"
            element={
              <>
                <Header />
                <Note3 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

           <Route
            path="/finalyearnotes"
            element={
              <>
                <Header />
                <Note4 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/firstyearnotesstudent"
            element={
              <>
                <Header />
                <Notestudent1 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/secondyearnotesstudent"
            element={
              <>
                <Header />
                <Notestudent2 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

         <Route
            path="/thirdyearnotesstudent"
            element={
              <>
                <Header />
                <Notestudent3 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/finalyearnotesstudent"
            element={
              <>
                <Header />
                <Notestudent4 /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

         <Route
            path="/circularadmin"
            element={
              <>
                <Header />
                <CircularAdmin /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/circularuser"
            element={
              <>
                <Header />
                <CircularUser /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

         <Route
            path="/journalsadmin"
            element={
              <>
                <Header />
                <JournalsAdmin /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/journalsuser"
            element={
              <>
                <Header />
                <JournalsUser /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

           <Route
            path="/userlist"
            element={
              <>
                <Header />
                < UserList/> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/users/add"
            element={
              <>
                <Header />
                < FormAddUser/> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

           <Route
            path="/users"
            element={
              <>
                <Header />
                <  Users/> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/users/edit/:id"
            element={
              <>
                <Header />
                <FormEditUser /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

         <Route
            path="/classbridge"
            element={
              <>
                <Header />
                <ClassBridge /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

          <Route
            path="/contentarea"
            element={
              <>
                <Header />
                <Contentarea /> {/* Component for First Year Student */}
                
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

         <Route
            path="/dihchatbot"
            element={
              <>
                <Header />
                <Chatbot /> {/* Component for First Year Student */}
                <Footer /> {/* Optional: Include or exclude footer */}
              </>
            }
          />

        
          {/* Route for Login page */}
          <Route
            path="/login"
            element={
              <>
                <Login />  {/* Show only the Login component */}
              </>
            }
          />
        </Routes>
      </div>

       

      {/* Button gradient is shown on all pages */}
      <ButtonGradient />
    </>
  );
};

export default App;

