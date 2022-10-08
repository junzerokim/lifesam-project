import leader from '../src/data/cellLeader';
import member from '../src/data/cellMember';
import './App.css';

function App() {
  // 셀 할당 인원
  let cellMaxCount = 9;

  // 셀장 총 인원
  // let cellLeaderCount = 7;

  // 셀원 총 인원
  let cellMemberCount = member.length;

  // 셀장 무작위 고유 번호
  // let leaderRandomMember = Math.floor(Math.random() * cellLeaderCount + 1);

  // 셀원 전체 이름
  // let cellMember = member.map((e) => e.name);

  // 셀장 이름
  let cellLeader = leader[0];

  // 셀장 나이 조건에 맞게 분류된 셀원 목록
  let sortCellMember = [];

  // 분류된 셀원 목록중 남자 셀원
  let sortMaleCellMember = [];

  // 분류된 셀원 목록중 여자 셀원
  let sortFemaleCellMember = [];

  // 분류된 셀원 목록중 무작위 남자 셀원
  let randomMaleCellMember = [];

  // 분류된 셀원 목록중 무작위 여자 셀원
  let randomFemaleCellMember = [];

  // 셀장 나이 조건에 맞게 분류되는 함수
  function sortMember() {
    for (let i = 0; i < cellMemberCount; i++) {
      if (member[i].age >= cellLeader.age - 5 && member[i].age <= cellLeader.age + 2) {
        sortCellMember.push(member[i]);
      }
    }
    randomProgram();
    return sortCellMember;
  }

  sortMember();

  function sort() {
    let cell = [];
    let maleResult = [];
    let femaleResult = [];

    for (let i = 0; i < sortCellMember.length; i++) {
      if (sortCellMember[i].gender === 'male') {
        sortMaleCellMember.push(sortCellMember[i]);
      } else if (sortCellMember[i].gender === 'female') {
        sortFemaleCellMember.push(sortCellMember[i]);
      }
    }

    for (let i = 0; i < 1000; i++) {
      let count = sortMaleCellMember.length;
      let randomNumber = Math.floor(Math.random() * count) + 1;

      if (!maleSameNum(randomNumber)) {
        maleResult.push(randomNumber);
        randomMaleCellMember.push(sortMaleCellMember[randomNumber - 1]);
        count--;
      }
    }

    for (let i = 0; i < 1000; i++) {
      let count = sortFemaleCellMember.length;
      let randomNumber = Math.floor(Math.random() * count) + 1;

      if (!femaleSameNum(randomNumber)) {
        femaleResult.push(randomNumber);
        randomFemaleCellMember.push(sortFemaleCellMember[randomNumber - 1]);
        count--;
      }
    }

    function maleSameNum(randomNumber) {
      for (let i = 0; i < maleResult.length; i++) {
        if (randomNumber === maleResult[i]) {
          return true;
        }
      }
      return false;
    }

    function femaleSameNum(randomNumber) {
      for (let i = 0; i < femaleResult.length; i++) {
        if (randomNumber === femaleResult[i]) {
          return true;
        }
      }
      return false;
    }

    let i = 0;

    while (cell.length <= 5) {
      if (cell.length === 4) {
        cell.push(randomMaleCellMember[i]);
        return cell;
      }
      cell.push(randomMaleCellMember[i]);
      cell.push(randomFemaleCellMember[i]);
      i++;
    }
    return cell;
  }

  console.log(sort().map((e) => e.name));

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
        <header className="App-header">* LIFESAM PROGRAM *</header>
        <br />
        <div className="cellLeaderArea">
          {leader.map((e) => {
            return (
              <div className="cellLeaderBox">
                <div className="cellLeader">{e.name} 셀</div>
              </div>
            );
          })}
        </div>
        <br />
        <div className="cellMemberBox">
          <div className="cellMember">
            {sort().map((e) => {
              return (
                <ul className="memberInfo">
                  <li className="memberName">{e.name}</li>
                  <li className="memberAge">{e.age}</li>
                </ul>
              );
            })}
          </div>
          <div className="cellMember">
            {sort().map((e) => {
              return (
                <ul className="memberInfo">
                  <li className="memberName">{e.name}</li>
                  <li className="memberAge">{e.age}</li>
                </ul>
              );
            })}
          </div>
          <div className="cellMember">
            {sort().map((e) => {
              return (
                <ul className="memberInfo">
                  <li className="memberName">{e.name}</li>
                  <li className="memberAge">{e.age}</li>
                </ul>
              );
            })}
          </div>
          <div className="cellMember">
            {sort().map((e) => {
              return (
                <ul className="memberInfo">
                  <li className="memberName">{e.name}</li>
                  <li className="memberAge">{e.age}</li>
                </ul>
              );
            })}
          </div>
          <div className="cellMember">
            {sort().map((e) => {
              return (
                <ul className="memberInfo">
                  <li className="memberName">{e.name}</li>
                  <li className="memberAge">{e.age}</li>
                </ul>
              );
            })}
          </div>
          <div className="cellMember">
            {sort().map((e) => {
              return (
                <ul className="memberInfo">
                  <li className="memberName">{e.name}</li>
                  <li className="memberAge">{e.age}</li>
                </ul>
              );
            })}
          </div>
          <div className="cellMember">
            {sort().map((e) => {
              return (
                <ul className="memberInfo">
                  <li className="memberName">{e.name}</li>
                  <li className="memberAge">{e.age}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
