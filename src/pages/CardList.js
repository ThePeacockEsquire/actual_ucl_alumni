import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./page.css";
import unknown_pic from "../imgs/unknown_pic.png";

function searchingFor(props) {
  return function(x) {
    //console.log(x);
    if (x.troupe !== undefined) {
      if (props.button === props.search) {
        //console.log(x.graduationDate);
        return x.graduationDate.includes(props.search) || !props;
      } else if (props.button === "Mission") {
        return (
          x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props
        );
      } else if (props.button === "Toast") {
        return (
          x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props
        );
      } else if (props.button === "Sketch 22") {
        return x.troupe.toLowerCase().includes("sketch") || !props;
      } else if (props.button === "IWA") {
        return (
          x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props
        );
      } else if (props.button === "OG") {
        return (
          x.troupe.toLowerCase().includes(props.button.toLowerCase()) || !props
        );
      } else {
        return (
          x.name.toLowerCase().includes(props.search.toLowerCase()) || !props
        );
      }
    }
  };
}

// name
// troupe
// graduationDate
// missionNameIfApplicable
// whereAreTheyNow
// additionalInformation
// picLink

class BioModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body>
          <h4>{this.props.data.name}</h4>
						<img name={this.props.data.name}
									src={
										this.props.data.picLink !== "" && this.props.data.picLink !== undefined
											? this.props.data.picLink
											: unknown_pic
									}
									alt={this.props.data.additionalInformation}
									style={{width: 300, borderWidth: 1}}
								/>
						<ul className="list-style-type:none;">
						  <li>Year of graduation was {this.props.data.graduationDate}</li>
						  <li>Performed on {this.props.data.troupe}</li>
							{this.props.data.missionNameIfApplicable !== "" ?
								<li>Mission name was {this.props.data.missionNameIfApplicable}</li>
								: ""
							}
						  <li>They are currently in {this.props.data.whereAreTheyNow}!</li>
							{this.props.data.additionalInformation !== "" ?
								<li>More about them: 
								{this.props.data.additionalInformation}
							</li>
								: ""
							}
						</ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



class CardList extends Component {
	state = {
		modalStatus: false,
		data: ""
	}

	 handleClose = () => {
		this.setState(
			{
				modalStatus: false,
				data: ""
			}
		);
	};

	 handleShow = (data) => {
		this.setState({
			modalStatus: true,
			data: data
		});
	};

  render() {
		var {modalStatus} = this.state;
    return (
			<div>
			<BioModal
				show={modalStatus}
				onHide={this.handleClose}
				data={this.state.data}
			/>
			{

			Array.from(this.props.data)
      .filter(searchingFor(this.props.state))
      .map((data, i) => {
		  console.log(data);
        return (
					<div key={i} className="gallery">
						<div >
							<button
								onClick={() => {this.handleShow.call(this, data)}}
								 defaultValue={this.data}
								>
								<img name={data.name}
									src={
										data.picLink !== "" && data.picLink !== undefined
											? data.picLink
											: unknown_pic
									}
									alt={data.additionalInformation}
								/>
							<div className="overlay">
								<div className="text">
									<h1>{data.name}</h1>
									<h5>{data.graduationDate}</h5>
								</div>
							</div>
							</button>
						</div>
					</div>
        );
  })
}
</div>
)
}
}

export default CardList;
