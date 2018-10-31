import * as React from "react";
import Test from "../../stories/screens/Test";
export interface Props {
	navigation: any,
}
export interface State { }
export default class TestContainer extends React.Component<Props, State> {
	render() {
		return <Test navigation={this.props.navigation} />;
	}
}
