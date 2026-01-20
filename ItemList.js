import React from 'react'
import { useState } from 'react'
import './ItemList.css';
import { FaTrashAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";

export default function ItemList(props) {
  const { items, onDelete, onChangeMode } = props; 

  return (
    
    <div>
      <header className="head">
        <div className="title-area">
          <h1>물품 목록</h1>
          <p>물품들을 확인 할 수 있습니다.</p>
        </div>
          <div className = 'dibutton'>
            <a href='./App.js' className="btn btn-home" >홈</a>  
            <a href='./ItemAdd.js' className="btn btn-list"  >물품추가</a>
          </div>
      </header>
      

        <article>
          <table>
            <tr>
              <th>순번</th>
              <th>이름</th>
              <th>가격</th>
              <th>태그</th>
              <th>수량</th>
              <th>총액</th>
              <th>수정, 삭제</th>
            </tr>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td style = {{'text-align': 'right'}}>{item.price}&#8361;</td>
                <td>{item.tag}</td>
                <td>{item.count}</td>
                <td style = {{'text-align': 'right'}}>{item.price * item.count}&#8361;</td>
                <td><><button onClick={() => {
                  onChangeMode('UPDATE', item.id);
                }}><LuNotebookPen /></button> 
                      <button onClick={() => {
                      if(window.confirm('정말 해당 항목을 삭제하시겠습니까?')){
                        onDelete(item.id);
                    } }}>
                <FaTrashAlt /></button></></td>
              </tr>
            ))}
          </table>
        </article>
        
    </div>
  )
}
