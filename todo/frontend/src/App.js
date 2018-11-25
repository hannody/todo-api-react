import React, {
  Component
} from 'react';

import axios from 'axios';

/*const list = [{
    "id": 1,
    "title": "1st Todo",
    "description": "learn django properly.",
  },
  {
    "id": 2,
    "title": "2nd Todo",
    "description": "learn react properly.",
  },
  {
    "id": 3,
    "title": "3rd Todo",
    "description": "learn django REST properly.",
  }
]
*/

class App extends Component {
  /*constructor(props){
    super(props);
    this.state = {list};
  }*/

  state={
    todos:[]
  };

  componentDidMount(){
    this.getTodos();
  }

getTodos(){
  axios
  .get('http://127.0.0.1:8000/api/')
  .then(res=>{
    this.setState({todos:res.data});
  })
  .catch(err =>{console.log(err);
  });

}

  render() {
    return (
      <div>
        {this.state.todos.map(item=>(
          <div key = {item.id}>
          <h1>{item.title}</h1>
          <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
