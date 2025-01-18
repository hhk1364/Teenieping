import menuBar from '../assets/menu_bar.png'
import '../styles/App.css'

function menuBarToggle (){
    var div = document.getElementById("menu");
    div.style.display = div.style.display == "none" ? "block" : "none";
}

function Topbar() {
  return (
    <div>
      <div className="top_bar">
            <img src={menuBar} id="menuBar" onClick={menuBarToggle}  style={{cursor:'pointer', height:'50px'}}/>
      </div>
      <div id="menu" className="menu">
        <div className="nicknameDiv">
            안녕 닉네임 핑!
        </div>
        <div>
            <ul>
                <li>
                    티니핑 캐릭터 전체보기
                </li>
                <li>
                    티니핑 캐릭터 시즌별 보기
                </li>
                <li>
                    즐겨찾기
                </li>
                <li>
                    문제
                </li>
                <li>
                    미디어
                </li>
            </ul>
        </div>
      </div>
    </div>

  );
}

export default Topbar; 
