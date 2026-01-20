import React from 'react'
import './ItemUpdate.css'
  

export default function ItemUpdate(props) {
  return (
    <div>  
      <header className="head">
        <div className="title-area">
          <h1>물품 관리</h1>
          <p>물품목록을 최신화 합니다.</p>
        </div>
          <div className = 'dibutton'>
            <a href='./App.js' className="btn btn-home" >홈</a>
            <a href='./ItemList.js' className="btn btn-list"  >물품확인</a>
          </div>
      </header>
      <div>
        <form onSubmit={
        (event) => {
            event.preventDefault();
            const name = event.target.name.value;
            const price = Number(event.target.price.value);
            const tag = event.target.tag.value;
            const count = Number(event.target.count.value);
            const date = Date()
            props.onUpdate(name, price, tag, count, date);
        }
        
        
        }>
        <box className="box" >
        <div className="tag"><label>제목</label> <input type="text" name="name" /> </div>
        <div className="tag"><label>가격</label> <input type="text" name="price" /> </div>
        <div className="tag"><label>태그</label> <input type="text" name="tag" /> </div>
        <div className="tag"><label>수량</label> <input type="text" name="count" /> </div>
        </box>
        <p> <input type="submit" className = "btn btn-update" value="물품 수정"  /> </p>
        <button type="button" className= "btn btn-cancle" onClick={props.onCancel}>
                취소
            </button>
        </form>
      </div>
    </div>
  )



}
