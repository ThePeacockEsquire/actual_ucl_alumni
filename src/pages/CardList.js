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
        centered
      >
        <Modal.Body>
          <h4>{this.props.name}</h4>
						<ul className="list-style-type:none;">
						  <li>Year of graduation was {this.props.graduationDate}</li>
						  <li>Performed on {this.props.troupe}</li>
							if(this.props.missionNameIfApplicable !== "" || this.props.missionNameIfApplicable !== null){
								<li>Mission name was {this.props.missionNameIfApplicable}</li>
							}
						  <li>They are currently in {this.props.whereAreTheyNow}!</li>
							<li>More about them:
								{this.props.additionalInformation}
							</li>
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
	constructor() {
		super();
		this.state = {
			modalStatus: false,
			data: null
		};
		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);
	}


	 handleClose() {
		console.log(this.modalStatus);
		this.setState(
			{
				modalStatus: false,
				data: null
			}
		);
	};

	 handleShow(e) {
		console.log(this.modalStatus);
		this.setState(
			{
				modalStatus: true,
				data: e.value
			}
		);
	};

  render() {
		var {modalStatus} = this.state;
    return (
			<div>
			<BioModal
				show={modalStatus}
				onHide={this.handleClose}
				data={this.data}
			/>
			{

				Array.from(this.props.data)
      .filter(searchingFor(this.props.state))
      .map(function(data, i) {
        return (
					<div>
						<div className="gallery" key={i}>
							<button
								onClick={this.handleShow}
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
						</button>
							<div className="overlay">
								<div className="text">
									<h1>{data.name}</h1>
									<h5>{data.graduationDate}</h5>
								</div>
							</div>
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
