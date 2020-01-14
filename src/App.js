import React from 'react';

const iuLike = [
    {
      id: 1,
      name: "IU",
      image: "https://img.sbs.co.kr/newsnet/etv/upload/2019/10/11/30000635839_1280.jpg"
    },
    {
      id: 2,
      name: "fullmoon",
      image: "https://i.pinimg.com/236x/cd/db/4a/cddb4af5193d707c327b83495810ea5f.jpg"
    },
    {
      id: 3,
      name: "jian",
      image: "http://optimal.inven.co.kr/upload/2018/05/19/bbs/i13643437109.jpg"
    }
    ];

function IU({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name}/>
  </div>
}

function App() {
  return (
      <div>
        <h1>Hello!!!!</h1>
        {iuLike.map(iu => (
            <IU key={iu.id} name={iu.name} picture={iu.image}/>
            ))}
      </div>
  );
}

export default App;