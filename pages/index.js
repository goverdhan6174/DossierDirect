import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header, Dropdown } from "../components/common";
import { Edit, ArrowBottom, Check } from "../components/icons";
import { Button } from "../components/common/ui";
import { useState } from "react";

let menu = [
  {
    title: "First Name",
    desc: "Lily",
  },
  {
    title: "Country Of Birth",
    desc: "Type",
  },
  {
    title: "Last & Maiden Name",
    desc: "Developer",
  },
  {
    title: "Father’s first name",
    desc: "Type",
  },
  {
    title: "Date of Birth",
    desc: "DD/MM/YYYY",
  },
  {
    title: "Father’s last name",
    desc: "Type",
  },
  {
    title: "City of Birth",
    desc: "Type",
  },
  {
    title: "Mother’s first name",
    desc: "Type",
  },
  {
    title: "Adress",
    desc: "compiled successfully ",
  },
  {
    title: "Mother’s first name",
    desc: "Type",
  },
  {
    title: "City/State",
    desc: "XYX",
  },
  {
    title: "Email",
    desc: "random@email.io",
  },
  {
    title: "Postal Code",
    desc: "120245",
  },
];

let menus = [
  { title: "Information abour wife", items: menu },
  { title: "Information abour Huband", items: menu },
  { title: "Marriage", items: menu },
  { title: "Separation", items: menu },
  { title: "Children", items: menu },
  { title: "Wife’s declaration", items: menu },
  { title: "Husband’s declaration", items: menu },
];

let uploadMenu = {
  title: "Uploaded  documents",
  items: [
    {
      desc: "Document’s name",
      icon: <p className="text-gray-400 cursor-pointer">X</p>,
    },
    {
      desc: "Document’s name",
      icon: <p className="text-gray-400 cursor-pointer">X</p>,
    },
    {
      desc: "Document’s name",
      icon: <p className="text-gray-400 cursor-pointer">X</p>,
    },
    {
      desc: "Document’s name",
      icon: <p className="text-gray-400 cursor-pointer">X</p>,
    },
  ],
};

let formDetails = [
  {
    title: "Questions Answer",
    desc: 10,
  },
  {
    title: "Missing Answer",
    desc: 3,
  },
  {
    title: "Documents Uploaded",
    desc: 4,
  },
  {
    title: "Missing Uploaded",
    desc: 3,
  },
];

export default function Home() {
  let [currentState, setCurrentState] = useState(0);
  let [formStates, setFormStates] = useState([
    { state: "Information", completed: false },
    { state: "Questions", completed: false },
    { state: "Documents", completed: false },
    { state: "Confirmation", completed: false },
  ]);

  let formHandler = (e) => {
    if (currentState >= 3) {
      console.log("current staet >= 3", currentState);
      setFormStates([
        { state: "Information", completed: false },
        { state: "Questions", completed: false },
        { state: "Documents", completed: false },
        { state: "Confirmation", completed: false },
      ]);
      setCurrentState(0);
      return;
    }
    setFormStates((prevFormState) => {
      let formstate = [...prevFormState];
      formstate[currentState].completed = true;
      return formstate;
    });
    setCurrentState((prevState) => (prevState + 1) % 4);
    console.log("CALLED");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>DOSSIERDIRECT</title>
        <meta name="description" content="DOSSIER DIRECT HOMEPAGE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        <div className={styles.formContainer}>
          <div className="absolute w-full h-2 bg-transparent z-0 mt-3 -mx-4">
            <div className="w-full absolute h-2 bg-transparent px-16">
              <div className="w-full h-2 bg-white">
                <div
                  className="bg-accent w-full h-2"
                  style={{ width: `${currentState * 33.3}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex max-w-full justify-between">
            {formStates.map((formState, i) => (
              <div
                className="flex flex-col justify-center items-center z-10"
                key={formState.state}
              >
                <div
                  className={`flex justify-center items-center rounded-full h-8 w-8 font-bold ${
                    formStates[currentState].state === formState.state
                      ? "bg-accent text-primary-light"
                      : formState.completed
                      ? "bg-accent text-primary-light"
                      : "bg-white text-primary"
                  }`}
                >
                  {formStates[currentState].state === formState.state ? (
                    <Check scale={0.8} />
                  ) : formState.completed ? (
                    <Check scale={0.8} />
                  ) : (
                    i + 1
                  )}
                </div>
                <p
                  className={`font-medium uppercase font-bold mt-2 ${
                    formStates[currentState].state === formState.state
                      ? "text-accent"
                      : formState.completed
                      ? "text-primary"
                      : "text-gray-400"
                  }  ${styles.formStateTitle}`}
                >
                  {formState.state}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-center text-primary font-bold text-2xl mb-8">
          Confirmation
        </h1>
        {menus.map((menu) => (
          <Dropdown
            key={menu.title}
            items={menu.items}
            closeOnOutsideClick
            closeOnEscape
            className="bg-white w-full rounded-lg mb-6"
            containerClassName="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-6"
            // childClassName="flex justify-between border-b-2 border-gray-200 p-4"
          >
            {({ toggle, open }) => (
              <button
                className="flex justify-between items-center bg-white w-full h-12 rounded-lg font-medium p-8"
                onClick={toggle}
              >
                <p className="text-primary text-left font-medium text-lg sm:text-xl">
                  {menu.title}
                </p>
                <div className="flex justify-between items-center space-x-2">
                  <Edit
                    className="stroke-current text-accent mr-4"
                    scale={1.2}
                  />
                  <ArrowBottom
                    className={`fill-current text-primary transition duration-600  ease-out  ${
                      !open && "transform rotate-180"
                    }`}
                    scale={1}
                  />
                </div>
              </button>
            )}
          </Dropdown>
        ))}
        <Dropdown
          items={uploadMenu.items}
          closeOnOutsideClick
          closeOnEscape
          className="bg-white w-full rounded-lg mb-6"
          containerClassName={`grid grid-cols-1 gap-4 px-8 py-6 ${styles["last-border-0"]}`}
          childClassName="flex justify-between border-b-2 border-gray-200 p-4"
        >
          {({ toggle, open }) => (
            <button
              className="flex justify-between items-center bg-white w-full h-12 rounded-lg font-medium p-8"
              onClick={toggle}
            >
              <p className="text-primary text-left font-medium text-lg sm:text-xl">
                {uploadMenu.title}
              </p>
              <div className="flex justify-between items-center space-x-2">
                <Edit className="stroke-current text-accent mr-4" scale={1.2} />
                <ArrowBottom
                  className={`fill-current text-primary transition duration-600  ease-out  ${
                    !open && "transform rotate-180"
                  }`}
                  scale={1}
                />
              </div>
            </button>
          )}
        </Dropdown>

        <div className="flex flex-col max-w-max ">
          {formDetails.map((detail) => (
            <div
              className="flex justify-between items-center my-1"
              key={detail.title}
            >
              <h3 className="text-gray-400 font-bold text-sm uppercase">
                {detail.title}
              </h3>
              <p className="text-primary font-bold text-sm ml-12">
                {detail.desc}
              </p>
            </div>
          ))}
          <Button type="outline" className="my-2">
            View Details
          </Button>
        </div>

        <div className="flex flex-col sm:max-w-max sm:mx-auto mt-2 sm:mt-6 pb-16">
          <div className="flex justify-between items-center my-1">
            <Button type="outline" className="w-full m-1 sm:m-2">
              Back
            </Button>
            <Button
              type="primary"
              className="w-full m-1 sm:m-2"
              onClick={formHandler}
            >
              Next
            </Button>
          </div>
          <Button type="outline" className="mx-1 sm:mx-2 mb-2">
            Save as Drafts
          </Button>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
