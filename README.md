# Movie App

React JS

- react에서 다루는 데이터는 props와 state
- props는 부모 컴포넌트가 자식에게 주는 값, 수정 불가
- state는 동적 데이터를 다룰 때 사용, 수정하기 위해서는 setState사용
- component가 생성될 때 호출되는 메소드
    - 순서는 constructor() -> render() -> componentDidMount()
- component가 업데이트 될 때 호출되는 메소드(setState()를 할때마다 실행)
    - static getDerivedStateFromProps() -> shouldComponentUpdate() -> <b><u>render()</u></b> -> getSnapshotBeforeUpdate() -> <b><u>componentDidUpdate()</u></b>