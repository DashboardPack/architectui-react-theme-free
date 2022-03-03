import React, {Fragment} from 'react';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import CarouselBSExample from './Examples/Carousel';

export default class CarouselExample extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Carousels & Slideshows"
                    subheading="Create easy and beautiful slideshows with these React components."
                    icon="pe-7s-album icon-gradient bg-sunny-morning"
                />
                <div className="mbg-3 h-auto ps-0 pe-0 bg-transparent no-border card-header">
                    <div className="card-header-title fsize-2 text-capitalize fw-normal">Bootstrap 5 Carousel</div>
                </div>
                <CarouselBSExample/>
            </Fragment>
        );
    }
}