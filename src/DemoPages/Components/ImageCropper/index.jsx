import { Fragment, useCallback, useState } from 'react';
import { CSSTransition, TransitionGroup } from '../../../utils/TransitionWrapper';

import { Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';
import Cropper from 'react-easy-crop';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import DemoImg from '../../../assets/utils/images/originals/fence-small.jpg';

function createImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (err) => reject(err));
    image.src = url;
  });
}

async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );
  return canvas.toDataURL('image/jpeg');
}

function CropCard({ title, src, aspect }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropResult, setCropResult] = useState(null);

  const onCropComplete = useCallback((_, areaPixels) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const cropImage = async () => {
    if (!croppedAreaPixels) return;
    setCropResult(await getCroppedImg(src, croppedAreaPixels));
  };

  return (
    <Card className="main-card mb-3">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <div style={{ position: 'relative', height: 400, width: '100%', background: '#33373e' }}>
          <Cropper
            image={src}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="divider" />
        <div className="text-center">
          <div className="text-center">
            <Button color="primary" onClick={cropImage}>
              Crop Selection
            </Button>
          </div>
          {cropResult ? (
            <div>
              <div className="divider" />
              <div>
                <h6>Cropped Result</h6>
              </div>
              <img className="after-img rounded" src={cropResult} alt="" />
            </div>
          ) : null}
        </div>
      </CardBody>
    </Card>
  );
}

export default function ImageCropExample() {
  return (
    <Fragment>
      <PageTitle
        heading="Image Crop"
        subheading="You can easily crop and edit images with this React plugin."
        icon="pe-7s-signal icon-gradient bg-malibu-beach"
      />
      <TransitionGroup>
        <CSSTransition
          component="div"
          classNames="TabsAnimation"
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <Row>
            <Col lg="6">
              <CropCard title="Basic" src={DemoImg} aspect={4 / 3} />
            </Col>
            <Col lg="6">
              <CropCard title="Predefined Aspect Ratio" src={DemoImg} aspect={16 / 9} />
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}
