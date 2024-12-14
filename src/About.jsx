
import React, {useState} from "react";

const About = () => {

  const [inputs,setInputs] = useState({name :"이름",email:"메일주소",tel:"전화번호"});

  const chnage = (e) =>{

      setInputs({...inputs,[e.target.id]:e.target.value
      });

  }

  return(
      <div>
          <div>
              <labe>이름</labe>
              <input type="text" id="name" name ="name" value={inputs.name} onChange={chnage} />
             
          </div>
          <div>
              <labe>메일</labe>
              <input type="text" id="email" name ="email" value={inputs.email} onChange={chnage} />
             
          </div>
          <div>
              <labe>전화</labe>
              <input type="text" id="tel" name ="tel" value={inputs.tel} onChange={chnage} />
              
          </div>
          <p>이름:{inputs.name}</p> <p>메일:{inputs.email}</p><p>전화번호:{inputs.tel}</p>
      </div>
  )

}
  export default About;