import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';

// import { Container } from './styles';

export default class Home extends Component {
  
  state = {
    data: "",
    obj: "{}"
  }
  
  handleTextChange(text) {
    this.setState({ data: text.target.value });
  }
  
  handleButtonClick() {
    this.setState({ obj: this.state.data });
    console.log(this.state.obj);
  }

  render() {
    const data = [
      { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 800, pv: 2400, amt: 2400 },
      { name: "Page A", uv: 600, pv: 2400, amt: 2400 }
    ];

    return (
      <div>
        <textarea className="code-area" onChange={(text) => {this.handleTextChange(text)}}></textarea>
        <LineChart
          width={600}
          height={300}
          data={JSON.parse(`[${this.state.obj}]`)}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
        <Button className="generate-chart-button" onClick={() => { this.handleButtonClick() }} />
      </div>
    );
  }
}