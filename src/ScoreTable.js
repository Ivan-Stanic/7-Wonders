import * as React from 'react';
import BlueCard from './BlueCard.png';
import GreenCard from './GreenCard.png';
import YellowCard from './YellowCard.png';
import VioletCard from './VioletCard.png';
import Wonders from './Wonders.svg';
import Token from './Token.png';
import Coins from './Coins.svg';
import Armies from './Armies.png';

function ListItem(props) {
    return (<tr id={props.value.id} style={props.value.color}>
                <td style={{backgroundImage: 'url(' + props.value.picture +')',
                            backgroundSize: 'auto 90%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'}}>            
                </td>
                <td>
                    <input type='number' pattern="\d*" className='allInputFields' id={props.value.id + '1'} onKeyUp={(e) => props.entryDetected(props.value.id, 1)}/>
                </td>
                <td>
                    <input type='number' pattern="\d*" className='allInputFields' id={props.value.id + '2'} onKeyUp={(e) => props.entryDetected(props.value.id, 2)} />
                </td>
            </tr>)
}

class ScoreTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: [
                {id: 'blueCards', color: {backgroundColor: '#EBF5FB'}, picture: BlueCard, player1: 0, player2: 0},
                {id: 'greenCards', color: {backgroundColor: '#D5F5E3'}, picture: GreenCard, player1: 0, player2: 0},
                {id: 'yellowCards', color: {backgroundColor: '#FCF3CF'}, picture: YellowCard, player1: 0, player2: 0},
                {id: 'violetCards', color: {backgroundColor: '#D2B4DE'}, picture: VioletCard, player1: 0, player2: 0},
                {id: 'wonders', color: {backgroundColor: '#FADBD8'}, picture: Wonders, player1: 0, player2: 0},
                {id: 'tokens', color: {backgroundColor: '#D5F5E3'}, picture: Token, player1: 0, player2: 0},
                {id: 'coins', color: {backgroundColor: '#FCF3CF'}, picture: Coins, player1: 0, player2: 0},
                {id: 'armies', color: {backgroundColor: '#E6B0AA'}, picture: Armies, player1: 0, player2: 0}
            ]
        };
        this.entryHandler = this.entryHandler.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
    }
    
    entryHandler(id, player) {
        let allCounts = this.state.counts;
        let sum = 0;
        for (let x=0; x < allCounts.length; x++) {
            let currentCounts = allCounts[x];
            if (currentCounts.id === id) {
                let currentValue = document.getElementById(id + player.toString()).value;
                currentCounts['player' + player] = parseInt(currentValue ? currentValue : 0);
                document.getElementById(id + player.toString()).value = currentCounts['player' + player].toString();
            }
            sum += currentCounts['player' + player];
        };
        this.setState({counts: allCounts});
        document.getElementById('sum' + player.toString()).innerHTML = sum.toString();
    }

    clearHandler() {
        let allCounts = this.state.counts;
        for (let x=0; x < allCounts.length; x++) {
            allCounts[x].player1 = 0;
            allCounts[x].player2 = 0;
            document.getElementById(allCounts[x].id + "1").value = "";
            document.getElementById(allCounts[x].id + "2").value = "";
        }
        this.setState({counts: allCounts});
        document.getElementById("name1").value = "";
        document.getElementById("name2").value = "";
        document.getElementById('sum1').innerHTML = "0";
        document.getElementById('sum2').innerHTML = "0";
    }
    
    render() {
        const rowItems = this.state.counts.map((mapListItem) =>
                                <ListItem   key={mapListItem.id}
                                            value={mapListItem}
                                            entryDetected={this.entryHandler} />
        );
        return (<table>
                    <tbody>
                        <tr className='rowName'>
                            <td className='cellText'>Name</td>
                            <td className='cellTextInput'>
                                <input type='text' className='allInputFields' id='name1' />
                            </td>
                            <td className='cellTextInput'>
                                <input type='text' className='allInputFields' id='name2' />
                            </td>
                        </tr>
                        {rowItems}
                        <tr className='rowSum'>
                            <td className='cellText sumText'>
                                <button className="tempCloseButton" onClick={(e) => this.clearHandler()}>Clear</button>
                                <span><h2 className="inlineH">{'\u03A3'}</h2></span>
                            </td>
                            <td className='cellSum' id='sum1'>0</td>
                            <td className='cellSum' id='sum2'>0</td>
                        </tr>
                    </tbody>
                </table>)
    }
}

export {ScoreTable};