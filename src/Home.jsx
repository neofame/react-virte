
  
 
const Home = () =>{

      const users=[
        {name:"김명성",email:"mskim@mail.com"},
        {name:"김나현",email:"hny@email.com"},
        {name:"정정정",email:"kkk@mail.com"},
    ]

    return (  
    <div>
      <table border="1">
          <thead>
              <tr>
                <td>이름</td><td>메일</td>
              </tr>
          </thead>
          <tbody>
              {users.map(user =>user.name)}
          </tbody>
      </table>
    </div>
    );
  };
  
  export default Home;