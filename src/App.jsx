import { useState } from 'react';
import './App.css';
import phone from './assets/phone.svg';
import email from './assets/email.svg';
import pin from './assets/pin.svg';
import education from './assets/education.svg';
import work from './assets/work.svg';

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
      <div className="gridContainer">
        <div className="inputs">
          <Input />
        </div>
        <div className="cv">
          <GeneralInformation />
          <Education />
          <PracticalExperience />
        </div>
      </div>
    </>
  );
}

function Input() {
  return (
    <>
      <InputGeneralInformation />
      <InputEducation />
      <InputPracticalExperience />
    </>
  );
}

function InputGeneralInformation() {
  return (
    <>
      <div className="form">
        <button></button>
        <h2>Personal Details</h2>
        <form>
          <div className="formField">
            <label htmlFor="name">Full name: </label>
            <br />
            <input type="text" name="name" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="email">Email: </label>
            <br />
            <input type="email" name="email" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="tel">Phone number: </label>
            <br />
            <input type="tel" name="tel" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="address">Address: </label>
            <br />
            <input type="text" name="address" required />
          </div>
          {/* <input type="submit" value="Subscribe!" /> */}
        </form>
      </div>
    </>
  );
}

function InputEducation() {
  return (
    <>
      <div className="form">
        <button></button>
        <h2>
          <img src={education} />
          Education
        </h2>
        <form>
          <div className="formField">
            <label htmlFor="school">School: </label>
            <br />
            <input type="text" name="school" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="degree">Degree: </label>
            <br />
            <input type="text" name="degree" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="startDate">Start Date: </label>
            <br />
            <input type="date" name="startDate" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="endDate">End Date: </label>
            <br />
            <input type="date" name="endDate" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="location">Location: </label>
            <br />
            <input type="text" name="location" required />
          </div>
          {/* <input type="submit" value="Subscribe!" /> */}
        </form>
      </div>
    </>
  );
}

function InputPracticalExperience() {
  return (
    <>
      <div className="form">
        <button></button>
        <h2>
          <img src={work} />
          Practical Experience
        </h2>
        <form>
          <div className="formField">
            <label htmlFor="company">Company Name: </label>
            <br />
            <input type="text" name="company" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="position">Position Title: </label>
            <br />
            <input type="text" name="degree" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="startDate">Start Date: </label>
            <br />
            <input type="date" name="startDate" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="endDate">End Date: </label>
            <br />
            <input type="date" name="endDate" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="location">Location: </label>
            <br />
            <input type="text" name="location" required />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="description">Description: </label>
            <br />
            <input type="text" name="description" required />
          </div>
          {/* <input type="submit" value="Subscribe!" /> */}
        </form>
      </div>
    </>
  );
}

function GeneralInformation() {
  return (
    <>
      <div className="generalInformation">
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
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <div className="education">
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
              <b>Gymnasium am Krebsberg</b> <br /> Abitur: 1,8
            </td>
          </tr>
        </table>
      </div>
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
