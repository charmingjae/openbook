import React, { Component } from "react";
import "../css/Rank.css";

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="rankWrapper">
          <div className="grade1">
            <table className="tbRank">
              <thead>
                <th>RANK</th>
                <th>과목명</th>
                <th>교수님</th>
                <th>평점</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>오라클</td>
                  <td>허태성</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>웹프로젝트</td>
                  <td>베이직</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>오라클</td>
                  <td>허태성</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>오라클</td>
                  <td>허태성</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>오라클</td>
                  <td>허태성</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>오라클</td>
                  <td>허태성</td>
                  <td>4.5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grade2">
            <table className="tbRank">
              <thead>
                <th>RANK</th>
                <th>과목명</th>
                <th>교수님</th>
                <th>평점</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>JAVA프로그래밍</td>
                  <td>이원주</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>시스템분석설계</td>
                  <td>윤경섭</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>오라클</td>
                  <td>허태성</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>JSP</td>
                  <td>이선애</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>운영체제</td>
                  <td>임광수</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>오픈소스</td>
                  <td>김태간</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>운영체제</td>
                  <td>조규철</td>
                  <td>4.5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grade3">
            <table className="tbRank">
              <thead>
                <th>RANK</th>
                <th>과목명</th>
                <th>교수님</th>
                <th>평점</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Front-End</td>
                  <td>윤여운</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>무선네트워크</td>
                  <td>김길동</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>빅데이터</td>
                  <td>박치기</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>하둡 프로그래밍</td>
                  <td>김동성</td>
                  <td>4.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Rank;
