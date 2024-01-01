import logo from "./logo192.png";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={logo} alt="aziz" />;
}

function Intro() {
  return (
    <div>
      <h1>Aziz Alfauzi</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
        mattis massa, sit amet commodo erat. Quisque sit amet tincidunt arcu.
      </p>
    </div>
  );
}

function SkillList() {
  return <h1>Kist of Icon</h1>;
}
