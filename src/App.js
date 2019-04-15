import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import resume from "./resume.data";
import Editor from "./components/Editor/index";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: JSON.parse(
                window.localStorage.getItem("resumeData") || JSON.stringify(resume)
            )
        };
    }

    handleChangeData = value => {
        this.setState({
            data: value
        });
    };

    render() {
        const { data } = this.state;
        return (
            <div className="container">
                <Editor data={data} onEditor={this.handleChangeData} />
                <Header
                    qrcode={data.qrcode}
                    info={data.info}
                    user={data.user}
                    desc={data.desc}
                />
                <Main
                    education={data.education}
                    skill={data.skill}
                    experience={data.experience}
                />
                <Footer />
            </div>
        );
    }
}

export default App;