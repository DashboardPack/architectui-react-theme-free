import React, { Fragment } from "react";

import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import Dropzone from "react-dropzone";

class FormDropZoneExample1 extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  onDrop(files) {
    this.setState({ files });
  }

  onCancel() {
    this.setState({
      files: [],
    });
  }

  render() {
    const files = this.state.files.map((file) => (
      <ListGroupItem key={file.name}>
        {file.name} - {file.size} bytes
      </ListGroupItem>
    ));
    return (
      <Fragment>
        <Row>
          <Col md="8">
            <div className="dropzone-wrapper dropzone-wrapper-lg">
              <Dropzone onDrop={this.onDrop.bind(this)} onFileDialogCancel={this.onCancel.bind(this)}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="dropzone-content">
                      <p>
                        Try dropping some files here, or click to select files
                        to upload.
                      </p>
                    </div>
                  </div>
                )}
              </Dropzone>
            </div>
          </Col>
          <Col md="4">
            <b className="mb-2 d-block">Dropped Files</b>
            <ListGroup>{files}</ListGroup>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default FormDropZoneExample1;
