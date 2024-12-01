import { useState } from 'react';
import './App.css';
import phone from './assets/phone.svg';
import email from './assets/email.svg';
import pin from './assets/pin.svg';
import educationImg from './assets/education.svg';
import work from './assets/work.svg';
import { defaultUserInfo } from './data';
import { defaultEducation } from './data';
import { defaultExperience } from './data';

export default function App() {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const [education, setEducation] = useState(defaultEducation);
  const [experience, setExperience] = useState(defaultExperience);

  const [currentEducation, setCurrentEducation] = useState('none'); // 'none', 'empty', 0, 1, 2 ...
  const [currentExperience, setCurrentExperience] = useState(0);

  const [userInfoFormVisible, setUserInfoFormVisible] = useState(true);
  const [educationFormVisible, setEducationFormVisible] = useState(true);
  const [experienceFormVisible, setExperienceFormVisible] = useState(true);

  function handleChangeUserInfo(value, field) {
    setUserInfo({ ...userInfo, [field]: value });
  }

  function handleChangeEducation(value, field) {
    setEducation({
      ...education,
      [currentEducation]: { ...education[currentEducation], [field]: value },
    });
  }

  function handleChangeExperience(value, field) {
    setExperience({
      ...experience,
      [currentExperience]: { ...experience[currentExperience], [field]: value },
    });
  }

  function handleChangeCurrentEducation(index, operation) {
    let newKey;
    if (operation === 'delete') {
      setCurrentEducation('none');
      delete education[index];
      return;
    }
    if (index === 'empty') {
      let keys = Object.keys(education);
      if (keys.length === 0) {
        newKey = 0;
      } else {
        newKey = keys[keys.length - 1] + 1;
      }
      setEducation({
        ...education,
        [newKey]: {
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          location: '',
        },
      });
      setCurrentEducation(newKey);
      return;
    }
    setCurrentEducation(index);
  }

  function handleChangeCurrentExperience(index, operation) {
    let newKey;
    if (operation === 'delete') {
      setCurrentExperience('none');
      delete experience[index];
      return;
    }
    if (index === 'empty') {
      let keys = Object.keys(experience);
      if (keys.length === 0) {
        newKey = 0;
      } else {
        newKey = keys[keys.length - 1] + 1;
      }
      setExperience({
        ...experience,
        [newKey]: {
          companyName: '',
          positionTitle: '',
          startDate: '',
          endDate: '',
          location: '',
          description: '',
        },
      });
      setCurrentExperience(newKey);
      return;
    }
    setCurrentExperience(index);
  }

  return (
    <>
      <div className="gridContainer">
        <div className="inputs">
          <Input
            userInfo={userInfo}
            education={education}
            experience={experience}
            currentEducation={currentEducation}
            currentExperience={currentExperience}
            handleChangeUserInfo={handleChangeUserInfo}
            handleChangeEducation={handleChangeEducation}
            handleChangeExperience={handleChangeExperience}
            handleChangeCurrentEducation={handleChangeCurrentEducation}
            handleChangeCurrentExperience={handleChangeCurrentExperience}
            userInfoFormVisible={userInfoFormVisible}
            educationFormVisible={educationFormVisible}
            experienceFormVisible={experienceFormVisible}
            setUserInfoFormVisible={setUserInfoFormVisible}
            setEducationFormVisible={setEducationFormVisible}
            setExperienceFormVisible={setExperienceFormVisible}
          />
        </div>
        <div className="cv">
          <UserInfo userInfo={userInfo} />
          <Education education={education} />
          <Experience experience={experience} />
        </div>
      </div>
    </>
  );
}

function EducationList({ education, handleChangeCurrentEducation }) {
  const titles = [];
  for (let key in education) {
    titles.push(
      <button
        key={'button' + key}
        className="listButton"
        onClick={() => handleChangeCurrentEducation(key)}
      >
        {education[key]['school']}
      </button>,
    );
  }
  return (
    <>
      {titles}
      <button
        className="listButton createNew"
        onClick={() => handleChangeCurrentEducation('empty')}
      >
        + Create new
      </button>
    </>
  );
}

function ExperienceList({ experience, handleChangeCurrentExperience }) {
  const titles = [];
  for (let key in experience) {
    titles.push(
      <button
        key={'button' + key}
        className="listButton"
        onClick={() => handleChangeCurrentExperience(key)}
      >
        {experience[key]['companyName']}
      </button>,
    );
  }
  return (
    <>
      {titles}
      <button
        className="listButton createNew"
        onClick={() => handleChangeCurrentExperience('empty')}
      >
        + Create new
      </button>
    </>
  );
}

function Input({
  userInfo,
  handleChangeUserInfo,
  education,
  experience,
  currentEducation,
  currentExperience,
  handleChangeEducation,
  handleChangeExperience,
  handleChangeCurrentEducation,
  handleChangeCurrentExperience,
  userInfoFormVisible,
  educationFormVisible,
  experienceFormVisible,
  setUserInfoFormVisible,
  setEducationFormVisible,
  setExperienceFormVisible,
}) {
  return (
    <>
      <InputUserInfo
        userInfo={userInfo}
        handleChangeUserInfo={handleChangeUserInfo}
        education={education}
        userInfoFormVisible={userInfoFormVisible}
        setUserInfoFormVisible={setUserInfoFormVisible}
      />
      <InputEducation
        education={education}
        currentEducation={currentEducation}
        handleChangeEducation={handleChangeEducation}
        handleChangeCurrentEducation={handleChangeCurrentEducation}
        educationFormVisible={educationFormVisible}
        setEducationFormVisible={setEducationFormVisible}
      />
      <InputExperience
        experience={experience}
        currentExperience={currentExperience}
        handleChangeExperience={handleChangeExperience}
        handleChangeCurrentExperience={handleChangeCurrentExperience}
        experienceFormVisible={experienceFormVisible}
        setExperienceFormVisible={setExperienceFormVisible}
      />
    </>
  );
}

function InputUserInfo({
  userInfo,
  handleChangeUserInfo,
  userInfoFormVisible,
  setUserInfoFormVisible,
}) {
  const form = userInfoFormVisible ? (
    <form>
      <div className="formField">
        <label htmlFor="name">Full name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={(e) => handleChangeUserInfo(e.target.value, 'name')}
          required
        />
        <br />
      </div>
      <div className="formField">
        <label htmlFor="email">Email: </label>
        <br />
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={(e) => handleChangeUserInfo(e.target.value, 'email')}
          required
        />
        <br />
      </div>
      <div className="formField">
        <label htmlFor="tel">Phone number: </label>
        <br />
        <input
          type="tel"
          name="tel"
          value={userInfo.phone}
          onChange={(e) => handleChangeUserInfo(e.target.value, 'phone')}
          required
        />
        <br />
      </div>
      <div className="formField">
        <label htmlFor="address">Address: </label>
        <br />
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={(e) => handleChangeUserInfo(e.target.value, 'address')}
          required
        />
      </div>
      {/* <input type="submit" value="Subscribe!" /> */}
    </form>
  ) : (
    <></>
  );
  return (
    <>
      <div className="form">
        <button
          className="navButton"
          onClick={() => setUserInfoFormVisible(!userInfoFormVisible)}
        ></button>
        <h2>Personal Details</h2>
        {form}
      </div>
    </>
  );
}

function InputEducation({
  education,
  currentEducation,
  handleChangeEducation,
  handleChangeCurrentEducation,
  educationFormVisible,
  setEducationFormVisible,
}) {
  let display;
  if (currentEducation === 'none') {
    display = (
      <EducationList
        education={education}
        handleChangeCurrentEducation={handleChangeCurrentEducation}
      />
    );
  } else {
    display = (
      <>
        <form>
          <div className="formField">
            <label htmlFor="school">School: </label>
            <br />
            <input
              type="text"
              name="school"
              value={education[currentEducation]['school']}
              onChange={(e) => handleChangeEducation(e.target.value, 'school')}
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="degree">Degree: </label>
            <br />
            <input
              type="text"
              name="degree"
              value={education[currentEducation]['degree']}
              onChange={(e) => handleChangeEducation(e.target.value, 'degree')}
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="startDate">Start Date: </label>
            <br />
            <input
              type="text"
              name="startDate"
              value={education[currentEducation]['startDate']}
              onChange={(e) =>
                handleChangeEducation(e.target.value, 'startDate')
              }
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="endDate">End Date: </label>
            <br />
            <input
              type="text"
              name="endDate"
              value={education[currentEducation]['endDate']}
              onChange={(e) => handleChangeEducation(e.target.value, 'endDate')}
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="location">Location: </label>
            <br />
            <input
              type="text"
              name="location"
              value={education[currentEducation]['location']}
              onChange={(e) =>
                handleChangeEducation(e.target.value, 'location')
              }
              required
            />
          </div>
          {/* <input type="submit" value="Subscribe!" /> */}
        </form>
        <button
          className="listButton"
          onClick={() =>
            handleChangeCurrentEducation(currentEducation, 'delete')
          }
        >
          Delete
        </button>
        <button
          className="listButton"
          onClick={() => handleChangeCurrentEducation('none')}
        >
          Go back
        </button>
      </>
    );
  }
  if (educationFormVisible === false) {
    display = <></>;
  }
  return (
    <>
      <div className="form">
        <button
          className={'navButton'}
          onClick={() => setEducationFormVisible(!educationFormVisible)}
        ></button>
        <h2>
          <img src={educationImg} />
          Education
        </h2>
        {display}
      </div>
    </>
  );
}

function InputExperience({
  experience,
  currentExperience,
  handleChangeExperience,
  handleChangeCurrentExperience,
  experienceFormVisible,
  setExperienceFormVisible,
}) {
  let display;
  if (currentExperience === 'none') {
    display = (
      <ExperienceList
        experience={experience}
        handleChangeCurrentExperience={handleChangeCurrentExperience}
      />
    );
  } else {
    display = (
      <>
        <form>
          <div className="formField">
            <label htmlFor="company">Company Name: </label>
            <br />
            <input
              type="text"
              name="company"
              value={experience[currentExperience]['companyName']}
              onChange={(e) =>
                handleChangeExperience(e.target.value, 'companyName')
              }
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="position">Position Title: </label>
            <br />
            <input
              type="text"
              name="position"
              value={experience[currentExperience]['positionTitle']}
              onChange={(e) =>
                handleChangeExperience(e.target.value, 'positionTitle')
              }
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="startDate">Start Date: </label>
            <br />
            <input
              type="text"
              name="startDate"
              value={experience[currentExperience]['startDate']}
              onChange={(e) =>
                handleChangeExperience(e.target.value, 'startDate')
              }
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="endDate">End Date: </label>
            <br />
            <input
              type="text"
              name="endDate"
              value={experience[currentExperience]['endDate']}
              onChange={(e) =>
                handleChangeExperience(e.target.value, 'endDate')
              }
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="location">Location: </label>
            <br />
            <input
              type="text"
              name="location"
              value={experience[currentExperience]['location']}
              onChange={(e) =>
                handleChangeExperience(e.target.value, 'location')
              }
              required
            />
            <br />
          </div>
          <div className="formField">
            <label htmlFor="description">Description: </label>
            <br />
            <input
              type="text"
              name="description"
              value={experience[currentExperience]['description']}
              onChange={(e) =>
                handleChangeExperience(e.target.value, 'description')
              }
              required
            />
          </div>
          {/* <input type="submit" value="Subscribe!" /> */}
        </form>
        <button
          className="listButton"
          onClick={() =>
            handleChangeCurrentExperience(currentExperience, 'delete')
          }
        >
          Delete
        </button>
        <button
          className="listButton"
          onClick={() => handleChangeCurrentExperience('none')}
        >
          Go back
        </button>
      </>
    );
  }
  if (experienceFormVisible === false) {
    display = <></>;
  }
  return (
    <>
      <div className="form">
        <button
          className={'navButton'}
          onClick={() => setExperienceFormVisible(!experienceFormVisible)}
        ></button>
        <h2>
          <img src={work} />
          Practical Experience
        </h2>
        {display}
      </div>
    </>
  );
}

function UserInfo({ userInfo }) {
  return (
    <>
      <div className="userInfo">
        <h1>{userInfo.name}</h1>
        <div className="spanContainer">
          <span>
            <img src={email} />
            {userInfo.email}
          </span>
          <span>
            <img src={phone} />
            {userInfo.phone}
          </span>{' '}
          <span>
            <img src={pin} />
            {userInfo.address}
          </span>
        </div>
      </div>
    </>
  );
}

function Education({ education }) {
  const list = [];
  for (let key in education) {
    list.push(
      <tr key={'education' + key}>
        <td className="time">
          {education[key]['startDate']} - {education[key]['endDate']} <br />{' '}
          {education[key]['location']}
        </td>
        <td>
          <b>{education[key]['school']}</b> <br /> {education[key]['degree']}
        </td>
      </tr>,
    );
  }
  return (
    <>
      <div className="education">
        <table>
          <tbody>
            <tr>
              <th colSpan="2">
                <h1>Education</h1>
              </th>
            </tr>
            {list}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Experience({ experience }) {
  const list = [];
  for (let key in experience) {
    list.push(
      <tr key={'experience' + key}>
        <td className="time">
          {experience[key]['startDate']} - {experience[key]['endDate']} <br />{' '}
          {experience[key]['location']}
        </td>
        <td>
          <b>{experience[key]['companyName']}</b> <br />{' '}
          {experience[key]['positionTitle']} <br />{' '}
          {experience[key]['description']}
        </td>
      </tr>,
    );
  }
  return (
    <>
      <section className="experience">
        <table>
          <tbody>
            <tr>
              <th colSpan="2">
                <h1>Practical Experience</h1>
              </th>
            </tr>
            {list}
          </tbody>
        </table>
      </section>
    </>
  );
}
