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
  return <image className="avatar" src="logo192.png" alt="aziz" />;
}

function Intro() {
  return <h1>Title</h1>;
}

function SkillList() {
  return <h1>Kist of Icon</h1>;
}
