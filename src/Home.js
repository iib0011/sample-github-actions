//Home component
import React from "react";
import ButtonNice from "react-button-nice";
import {withRouter} from "react-router-dom";
import {btnDefaultStyle, marginStyle} from "./styles";


class Home extends React.Component {
    render() {
        return (
            <div><h1 style={{display: 'flex', marginTop: 50, justifyContent: 'center'}}>Select a level</h1>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <ButtonNice alpha={0.3} style={marginStyle}>
                        <button

                            style={{
                                ...btnDefaultStyle,
                                backgroundColor: "#843CC7",
                                margin: 10,
                            }}
                            onClick={() => this.props.history.push({
                                pathname: '/Level',
                                state: {detail: 0}
                            })}
                        >
                            Easy
                        </button>
                    </ButtonNice>
                    <ButtonNice alpha={0.3} style={marginStyle}>
                        <button
                            style={{
                                ...btnDefaultStyle,
                                backgroundColor: "#843CC7",
                                margin: 10,

                            }}
                            onClick={() => this.props.history.push({
                                pathname: '/Level',
                                state: {detail: 1}
                            })}
                        >
                            Hard
                        </button>
                    </ButtonNice>
                </div>
            </div>
        );
    }

}

export default withRouter(Home);
