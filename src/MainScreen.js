import React, { Component } from 'react';

function MoneyChanges(props) {
    const numbers = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
    let amountinput = props.data;
    const CalcMoney = numbers.map((number)=> {
        let counter = 0;
        let leftover = 0;
        while(amountinput>=number){
            amountinput = amountinput - number;
            counter++;
            if(amountinput<50){
                leftover = amountinput
            }
        }
        return(
            <React.Fragment key={number}>
                {counter > 0 &&
                    <li style={styles.listStyle}>
                    {number} X {counter}
                    </li>
                }
                {leftover > 0 &&
                    <label>
                        leftover: {leftover}
                    </label>
                }
            </React.Fragment>
        );
    })
    return(
        <ul style={styles.listContainer}>
            {CalcMoney}
        </ul>
    )
}

export default class MainScreen extends Component {

    constructor(props) {
        super(props);  
        this.state = {
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({amount: event.target.value});
    }

    render() {

        return (
            <div style={styles.container}>
                <label style={styles.label}>
                Insert Amount :
                </label>
                <input type="number" style={styles.inputStyle} value={this.state.amount} onChange={this.handleChange} />
                <MoneyChanges data={this.state.amount}/>
            </div>
                
        );
    }
}

const styles ={
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '15%'
    },
    label: {
        marginBottom: '10px',
    },
    listStyle: {
        listStyleType: 'none',
        fontSize: '1.5em'
    },
    listContainer: {
        paddingLeft: '0'
    },
    inputStyle: {
        width: '15%',
        height: '30px',
        fontSize: '1.5em'
    }
}