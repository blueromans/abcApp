import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {Button,Text} from "native-base";
import styles from "../styles/index.styles";

const Tag = ({ label, tagContainerStyle, tagTextStyle }) => {
    return (
        <View style={[styles.tags.tag, tagContainerStyle]}>
            <Text style={[styles.tags.tagLabel, tagTextStyle]}>{label}</Text>
        </View>
    );
};

export class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: props.initialTags,
        };
    }

    componentWillReceiveProps(props) {
        const { initialTags = [] } = props;
        this.setState({
            tags: initialTags,
        });
    }



    render() {
        const {
            containerStyle,
            style,
            tagContainerStyle,
            tagTextStyle,
            renderTag
        } = this.props;

        return (
            <View style={[styles.tags.container, containerStyle, style]}>
                {this.state.tags.map((tag, index) => {
                    const tagProps = {
                        tag,
                        index,
                        tagContainerStyle,
                        tagTextStyle
                    };

                    return renderTag(tagProps);
                })}
                <Button primary transparent>
                    <Text style={{fontSize: 13}}>…edit tags</Text>
                </Button>
            </View>
        );
    }
}

Tags.defaultProps = {
    initialTags: [],
    renderTag: ({ tag, index, ...rest }) => (
        <Tag key={`${tag}-${index}`} label={tag} {...rest} />
    )
};

Tags.propTypes = {
    initialTags: PropTypes.arrayOf(PropTypes.string),
    renderTag: PropTypes.func,
    /* style props */
    containerStyle: PropTypes.any,
    style: PropTypes.any,
    tagContainerStyle: PropTypes.any,
    tagTextStyle: PropTypes.any,
};
