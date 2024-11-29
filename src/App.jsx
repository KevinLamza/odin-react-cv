import { useState } from 'react';
import './App.css';
import phone from './assets/phone.svg';
import email from './assets/email.svg';
import pin from './assets/pin.svg';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

export default function App() {
  return (
    <>
      <div className="cv">
        <GeneralInformation />
        <Education />
        <PracticalExperience />
      </div>
    </>
  );
}

function GeneralInformation() {
  return (
    <>
      <section className="generalInformation">
        <h1>Kevin Lamza</h1>
        <div className="spanContainer">
          <span>
            <img src={email} />
            mail@mail.net
          </span>
          <span>
            <img src={phone} />
            +49 123 456 789
          </span>{' '}
          <span>
            <img src={pin} />
            Somewhere, Europe
          </span>
        </div>
      </section>
    </>
  );
}

function Education() {
  return (
    <>
      <section className="education">
        <table>
          <tr>
            <th colSpan="2">
              <h1>Education</h1>
            </th>
          </tr>
          <tr>
            <td className="time">
              09/2014 - 08/2020 <br /> Saarbrücken, GER
            </td>
            <td>
              <b>Universität des Saarlandes</b> <br /> Bachelor of Engineering
              in Mechatronics
            </td>
          </tr>
          <tr>
            <td className="time">
              09/2006 - 06/2014 <br /> Neunkirchen, GER
            </td>
            <td>
              Gymnasium am Krebsberg <br /> Abitur: 1,8
            </td>
          </tr>
        </table>
      </section>
    </>
  );
}

function PracticalExperience() {
  return (
    <>
      <section className="practicalExperience">
        <table>
          <tr>
            <th colSpan="2">
              <h1>Practical Experience</h1>
            </th>
          </tr>
          <tr>
            <td className="time">03/2021 - 03/2023</td>
            <td>
              <b>ZF Friedrichshafen AG</b> <br /> Prüfmittelplaner <br /> Planen
              und Beschaffen von Prüfmitteln und Messtechnik für fertigungsnahe
              Serienüberwachung. Statistische Untersuchungen und Auswertungen.
            </td>
          </tr>
        </table>
      </section>
    </>
  );
}
