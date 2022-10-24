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
  // let cellMember = member;

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

  let cellMembers = member.map((e) => {
    return e;
  });

  let result = new Map();

  return (
    <div className="App">
      <div className="container">
        <div className="cellLeaderArea">
          {leader.map((e) => {
            let cell = [];
            let num = 0;
            for (let i = 0; i < cellMembers.length; i++) {
              if (num > 2) {
                continue;
              }
              if (cellMembers[i].age >= e.age - 5 && cellMembers[i].age <= e.age + 2) {
                if (cell.length) {
                  for (let j = 0; j < cell.length; j++) {
                    if (cell[j].attendenceRate === cellMembers[i].attendenceRate) {
                      break;
                    }
                    cell.push(cellMembers[i]);
                    num++;
                    break;
                  }
                } else {
                  cell.push(cellMembers[i]);
                  num++;
                }
              }
              cellMembers = cellMembers.sort(() => Math.random() - 0.5);
            }
            result.set(e.name, cell);
            cellMembers = cellMembers.filter((x) => !cell.includes(x));
          })}
          {leader.map((e) => {
            if (!cellMembers.length) {
              return false;
            }
            cellMembers = cellMembers.sort(() => Math.random() - 0.5);
            for (let j = 0; j < cellMembers.length; j++) {
              if (cellMembers[j].age >= e.age - 5 && cellMembers[j].age <= e.age + 2) {
                let tempcell = cellMembers[j];
                let cell = result.get(e.name);
                cell.push(tempcell);
                result.set(
                  e.name,
                  cell.map((e) => e)
                );
                //cellMembers = cell.includes(x));
                cellMembers = cellMembers.filter((e) => e.name !== tempcell.name);
                break;
              }
            }
          })}
          {result.forEach((value, key, map) => {
            console.log(
              key +
                ' => ' +
                value.map((e) => {
                  return e.name;
                })
            );
          })}

          {console.log('조건 미충족 인원 : ' + cellMembers[0].name)}
          <div className="cellLeaderBox">
            <div className="cellLeader"></div>
          </div>
          {/* <button type="button" className="refreshBtn" onclick={window.location.reload()}>
            refresh
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
