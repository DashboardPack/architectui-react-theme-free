import React, {Fragment} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples

import FormInputMaskExample from './Examples/example1';

class FormInputMask extends React.Component {

    render() {
        return (
            <Fragment>
                <PageTitle
                    heading="Input Mask"
                    subheading="Add all kind of input masks for inputs for a better user experience."
                    icon="pe-7s-global icon-gradient bg-happy-itmeo"
                />
                <TransitionGroup>
                    <CSSTransition component="div" classNames="TabsAnimation" appear={true}
                        timeout={1500} enter={false} exit={false}>
                        <FormInputMaskExample/>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}

export default FormInputMask;