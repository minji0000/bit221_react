import React, { useReducer } from 'react'
import Student from './Student'
import {useState} from 'react';

const reducer = (state, action) => {
  switch (action.type){
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false,   
    };
      return {
        count : state.count + 1,
        students:[...state.students, newStudent],
      }

    case 'del-student':
      return {
        count: state.count -1,
        students: state.students.filter(student=> student.id !== action.payload.id)
      }  

    case 'check-student' :
      return {
        count: state.count,
        students: state.students.map((student)=> {
          if(student.id === action.payload.id) {
            return {...student, isHere: !student.isHere}
          }
          return student;
        })
      }  

      default:
        return state;
  }
}

const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: '베리',
      isHere: false
    },
  ],

}

function UseReducer03() {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState )

  return (
    <div className='container'>
      <div className='alert alert-info'>
        <div>
        <i className="fa-solid fa-book"></i>
        &nbsp; 출석부
        </div>
        <hr/>                                                                           
                                                                                            
        <p>총 학생수 : {studentsInfo.count}명</p>
        <div>
          <input className='form-control'
            placeholder='이름을 입력해주세요.' 
            spellCheck='false'
            onChange={(e)=>{setName(e.target.value)}}
          />
          <button className='btn btn-success mt-3'
            onClick={(e)=> {
              if(name === '') {
                alert('이름을 입력해주세요');
                return ;
              }
              dispatch({
                type:'add-student', payload: {name} 
              });

            }}
          >추가</button>
          
        </div>
      </div>

      {
        studentsInfo.students.map(student=>{
          return <Student
            key={student.id}
            name = {student.name}
            id = {student.id}
            isHere = {student.isHere}
            dispatch = {dispatch}
          />
        })
      
        }
    </div>
  )
}

export default UseReducer03