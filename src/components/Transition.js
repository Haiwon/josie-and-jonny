import React from "react";
import { Location } from "@reach/router";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
const timeout = 500;
const getTransitionStyles = {
	entering: {
		position: `absolute`,
		opacity: 0,
	},
	entered: {
		transition: `opacity ${timeout}ms ease-in-out`,
		opacity: 1,
	},
	exiting: {
		transition: `opacity ${timeout}ms ease-in-out`,
		opacity: 0,
	},
};
class Transition extends React.PureComponent {
	render() {
		const { children } = this.props;
		return (
			<Location>
                {({location}) => (
                    <TransitionGroup>
                        <ReactTransition
                            key={location.pathname}
                            timeout={{
                                enter: timeout,
                                exit: timeout,
                            }}
                        >
                            {status => (
                                <div
                                    style={{
                                        ...getTransitionStyles[status],
                                    }}
                                >
                                    {children}
                                </div>
                            )}
                        </ReactTransition>
                    </TransitionGroup>
                )
            }
			</Location>
		);
	}
}
export default Transition;
