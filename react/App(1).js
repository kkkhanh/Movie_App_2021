import React from 'react';
import Macaron from './Macaron';
import cakes from './cakes.json';
import PropTypes from 'prop-types';
import { waitForDomChange } from '@testing-library/react';

// import Pizza from './Pizza';

// function Pizza(props) {//자식컴포넌트
//   console.log(props);
//   return (
//     <>
//       <h1>I love {props.propsName}</h1>
//       <p>I love {props.propsName2}</p>
//     </>
//   );
// }

// function Pizza(props) {
//   const {propsName,propsName2} = props;//구조 분해 할당
//   return (
//     <>
//       <h1>I love {propsName}</h1>
//       <p>I love {propsName2}</p>
//     </>
//   );
// }

// function Pizza({propsName,propsName2}) {//구조 분해 할당
//   return (
//     <>
//       <h1>I love {propsName}</h1>
//       <p>I love {propsName2}</p>
//     </>
//   );
// }

function Pizza({propsId,propsName,propsImage}) {//구조 분해 할당
  return (
    <>
      <div>
        <h1>cake No. {propsId}</h1>
        <h2>{propsName}</h2>
        <img src={propsImage} alt={propsName} />
      </div>
    </>
  );
}
/*
const cakes = [
  {
    id: 1, //키: 키값
    name: 'Cookie Dough Cake',
    image: 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg',
  },//객체
  {
    id: 2,
    name: 'Rainbow Cake',
    image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
  },
  {
    id: 3,
    name: 'Soft & Moist Funfetti Cake',
    image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg',
  },
];//배열
*/

function App() {//부모컴포넌트
  return (
    <>
    <div>안녕하세요!</div>
    <Macaron />
    {/*<Pizza propsName={"ice cream"}/*컨트롤러 / 객체형태로 전달*/ /*/>
    /*<Pizza propsName2={"waffle"} />*/}
    {cakes.map(cake/*매개변수*/ => (
                                    <Pizza propsId={cake.id}
                                           propsName={cake.name}
                                           propsImage={cake.image}
                                    />
    ))}
    </>//감싸줘야함
  );
}

//npm install prop-types
Pizza.propTypes = {
  propsId : PropTypes.number.isRequired,
  propsName : PropTypes.string.isRequired,
  propsImage : PropTypes.string
}

export default App; //함수를 App에 내보내기
