import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link, Route, Routes } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect } from "react";
import Book1 from "./Book1";
import Book2 from "./Book2";
import Book3 from "./Book3";
import Book4 from "./Book4";
import Note1 from "./Note1"; // Imported Note1 component
import Note2 from "./Note2"; // Imported Note2 component
import Note3 from "./Note3"; // Imported Note3 component
import Note4 from "./Note4"; // Imported Note4 component
import Firstyear from "./Bookstudent1";
import Secondyear from "./Bookstudent2";
import Thirdyear from "./Bookstudent3";
import Finalyear from "./Bookstudent4";
import Login from "./Login";
import { LogOut, getMe, reset } from "../features/authSlice";
import Notestudent1 from "./Notestudent1";
import Notestudent2 from "./Notestudent2";
import Notestudent3 from "./Notestudent3";
import Notestudent4 from "./Notestudent4";
import CircularAdmin from "./circularadmin";
import CircularUser from "./circularuser";
import JournalsUser from "./Journaluser";
import JournalsAdmin from "./Journaladmin";
import UserList from "./userlist";
import ClassBridge from "./classbridge";
import Chatbot from "./chatbot";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [contentDropdownOpen, setContentDropdownOpen] = useState(false);
  const [booksDropdownOpen, setBooksDropdownOpen] = useState(false);
  const [notesDropdownOpen, setNotesDropdownOpen] = useState(false);
  const [journalsDropdownOpen, setJournalsDropdownOpen] = useState(false);
  const [circularDropdownOpen, setCircularDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const toggleContentDropdown = () => {
    setContentDropdownOpen((prev) => !prev);
  };

 
  const toggleBooksDropdown = () => {
    // Close all other dropdowns and only open the Books dropdown
    setBooksDropdownOpen((prev) => !prev);
    setNotesDropdownOpen(false);
    setJournalsDropdownOpen(false);
    setCircularDropdownOpen(false);
  };

  const handleClick = () => {
    if (openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  const toggleNotesDropdown = () => {
    // Close all other dropdowns and only open the Notes dropdown
    setNotesDropdownOpen((prev) => !prev);
    setBooksDropdownOpen(false);
    setJournalsDropdownOpen(false);
    setCircularDropdownOpen(false);
  };
  const toggleJournalsDropdown = () => {
    // Close all other dropdowns and only open the Journals dropdown
    setJournalsDropdownOpen((prev) => !prev);
    setBooksDropdownOpen(false);
    setNotesDropdownOpen(false);
    setCircularDropdownOpen(false);
  };
  const toggleCircularDropdown = () => {
    // Close all other dropdowns and only open the Circular dropdown
    setCircularDropdownOpen((prev) => !prev);
    setBooksDropdownOpen(false);
    setNotesDropdownOpen(false);
    setJournalsDropdownOpen(false);
  };

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  
  //const handleClickOutside = (event) => {
    //if (!event.target.closest('.dropdown-content')) {
      //setBooksDropdownOpen(false);
      //setNotesDropdownOpen(false);
      //setJournalsDropdownOpen(false);
      //setCircularDropdownOpen(false);
    //}
  //};
  
  const handleLogout = () => {
    dispatch(LogOut()).then(() => {
      dispatch(reset());
    });
    document.addEventListener('click', handleClickOutside);
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
             <span className="text-lg font-bold">Databrainhub</span>
        </a>


          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <HamburgerMenu />
          </nav>

          {user && (
            <div className="relative ml-8">
              <a
                href="#signup"
                className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
                onClick={toggleContentDropdown}
              >
                Content Area
              </a>
                

              {contentDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-n-8 text-white shadow-md z-10">
                  <ul className="flex flex-col space-y-2 p-4">
                    <li>

                      <a
                        href="#books"
                        className="hover:text-color-1"
                        onClick={toggleBooksDropdown}
                      >
                        Books
                      </a>

                      {booksDropdownOpen && (
                        <ul className="ml-4 mt-2 space-y-2">
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/firstyear"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                First Year Books (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/firstyearstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                First Year Books (User)
                              </Link>
                            )}
                          </li>
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/secondyear"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Second Year Books (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/secondyearstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Second Year Books (User)
                              </Link>
                            )}
                          </li>
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/thirdyear"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Third Year Books (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/thirdyearstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Third Year Books (User)
                              </Link>
                            )}
                          </li>
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/finalyear"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Final Year Books (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/finalyearstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Final Year Books (User)
                              </Link>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <a
                        href="#notes"
                        className="hover:text-color-1"
                        onClick={toggleBooksDropdown}
                      >
                        Personalized Notes
                      </a>

                      {notesDropdownOpen && (
                        <ul className="ml-4 mt-2 space-y-2">
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/firstyearnotes"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                First Year Notes (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/firstyearnotesstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                First Year Notes (User)
                              </Link>
                            )}
                          </li>
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/secondyearnotes"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Second Year Notes (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/secondyearnotesstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Second Year Notes (User)
                              </Link>
                            )}
                          </li>
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/thirdyearnotes"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Third Year Notes (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/thirdyearnotesstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Third Year Notes (User)
                              </Link>
                            )}
                          </li>
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/finalyearnotes"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Final Year Notes (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/finalyearnotesstudent"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Final Year Notes (User)
                              </Link>
                            )}
                          </li>
                        </ul>
                      )}
                    </li>
  
                    {user.role === "admin" && (
                      <li>
                        <Link
                          to="/userlist"
                          className="hover:text-color-1"
                        >
                          User List
                        </Link>
                      </li>
                    )}

                      <li>
                        <Link
                          to="/classbridge"
                          className="hover:text-color-1"
                        >
                          ClassBridge
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/dihchatbot"
                          className="hover:text-color-1"
                        >
                          DIH Chatbot
                        </Link>
                      </li>
                    
                    <li>
                      <a
                        href="#journals"
                        className="hover:text-color-1"
                        onClick={toggleNotesDropdown}
                      >
                        Journals
                      </a>

                      { journalsDropdownOpen&& (
                        <ul className="ml-4 mt-2 space-y-2">
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/journalsadmin"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Journals (Admin)
                              </Link>
                              ) : (
                                <Link
                                  to="/journalsuser"
                                  className="hover:text-color-1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Journals (User)
                                </Link>
                              )}
                            </li>
                          </ul>
                        )}
                        </li>
                        <li>
                      <a
                        href="#circular"
                        className="hover:text-color-1"
                        onClick={toggleJournalsDropdown}
                      >
                        Circular
                      </a>


                      {booksDropdownOpen && (
                        <ul className="ml-4 mt-2 space-y-2">
                          <li>
                            {user.role === "admin" ? (
                              <Link
                                to="/circularadmin"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Circular (Admin)
                              </Link>
                            ) : (
                              <Link
                                to="/circularuser"
                                className="hover:text-color-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Circular (User)
                              </Link>
                            )}
                          </li>
                        </ul>
 
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {!user ? (
            <Link to="/login" className="hidden lg:flex">
              <Button>Login</Button>
            </Link>
          ) : (
            <Button onClick={handleLogout} className="hidden lg:flex">
              Logout
            </Button>
          )}

          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>

      <Routes>
        <Route path="/firstyear" element={<Book1 />} />
        <Route path="/secondyear" element={<Book2 />} />
        <Route path="/thirdyear" element={<Book3 />} />
        <Route path="/finalyear" element={<Book4 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/firstyearstudent" element={<Firstyear />} />
        <Route path="/secondyearstudent" element={<Secondyear />} />
        <Route path="/thirdyearstudent" element={<Thirdyear />} />
        <Route path="/finalyearstudent" element={<Finalyear />} />
        <Route path="/firstyearnotes" element={<Note1 />} /> {/* Added route for First Year Notes */}
        <Route path="/secondyearnotes" element={<Note2 />} /> {/* Added route for Second Year Notes */}
        <Route path="/thirdyearnotes" element={<Note3 />} /> {/* Added route for Third Year Notes */}
        <Route path="/finalyearnotes" element={<Note4 />} /> {/* Added route for Final Year Notes */}
        <Route path="/firstyearnotesstudent" element={<Notestudent1 />} /> {/* Added route for First Year Notes for Student */}
        <Route path="/secondyearnotesstudent" element={<Notestudent2 />} /> {/* Added route for Second Year Notes for Student */}
        <Route path="/thirdyearnotesstudent" element={<Notestudent3 />} /> {/* Added route for Third Year Notes for Student */}
        <Route path="/finalyearnotesstudent" element={<Notestudent4 />} /> {/* Added route for Final Year Notes for Student */}
        <Route path="/journalsadmin" element={<JournalsAdmin />} />
        <Route path="/journalsuser" element={<JournalsUser />} />
        <Route path="/circularadmin" element={<CircularAdmin />} />
        <Route path="/circularuser" element={<CircularUser />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/classbridge" element={<ClassBridge/>} />
        <Route path="/dihchatbot" element={<Chatbot/>} />
        
      </Routes>
    </>
  );
};
export default Header;  


































