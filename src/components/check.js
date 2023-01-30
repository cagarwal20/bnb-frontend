import React , {Component} from 'react';
import axios from 'axios';

class Check extends Component {

	state = {
		details:[],
	}

	componentDidMount() {

		let data ;

		axios.get('http://localhost:8000/user/')
		.then(res => {
            
			data = res.data.data;
			this.setState({
				details : data	
			});
		})
		.catch(err => {})
        
	};

    render(){
        return(
            <div>
                  {this.state.details.map((detail, id) =>  (
                  <div>
                  <div >
                        <div >
                            {detail.name}
                            {detail.address}
                        </div>
                  </div>
                  </div>
                  )
              )}
            </div>
            );
        
            }

}

export default Check;
