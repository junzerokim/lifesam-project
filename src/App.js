import leader from '../src/data/cellLeader';
import member from '../src/data/cellMember';
import './App.css';

function App() {
  // 셀 할당 인원
  let cellMaxCount = 4;

  // 셀원 총 인원
  let cellMemberCount = member.length;

  // 셀장 총 인원
  // let leaderCount = leader.length;

  // 셀장 이름
  let cellLeader = leader[0];

  // 셀원 목록
  let cellMember = member;

  // 셀장 나이 조건에 맞게 분류된 셀원 목록
  let sortCellMember = [];

  // 셀장 나이 조건에 맞게 분류되는 함수
  (function sortMember() {
    for (let i = 0; i < cellMemberCount; i++) {
      if (member[i].age >= cellLeader.age - 5 && member[i].age <= cellLeader.age + 2) {
        sortCellMember.push(member[i]);
      }
    }
    randomProgram();
    return sortCellMember;
  })();

  console.log(cellMember);

  function randomProgram() {
    let result = [];
    let cell = [];
    let i = 0;

    while (i < cellMaxCount) {
      let memberRandomNumber = Math.floor(Math.random() * sortCellMember.length) + 1;

      if (!sameNum(memberRandomNumber)) {
        result.push(memberRandomNumber);
        cell.push(member[memberRandomNumber - 1].name);
        i++;
      }
    }

    function sameNum(memberRandomNumber) {
      for (let i = 0; i < result.length; i++) {
        if (memberRandomNumber === result[i]) {
          return true;
        }
      }
      return false;
    }
    return cell;
  }

  return (
    <div className="App">
      <div className="container">
        <div className="cellLeaderArea">
          {leader.map((e) => {
            return (
              <div className="cellLeaderBox">
                <div className="cellLeader">
                  {e.age} {e.name} 셀장 -
                  <div className="cell">
                    {member.map((v) => {
                      let cell = [];
                      if (v.age >= e.age - 5 && v.age <= e.age + 2) {
                        cell.push(v.name);
                      }
                      return cell;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
