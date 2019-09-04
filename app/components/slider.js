import React, {Component} from 'react';
import {FlatList, View, Dimensions, TouchableOpacity, Platform, Image,I18nManager} from 'react-native';
import {Button,Text} from 'native-base';

const { width, height } = Dimensions.get('window');
const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';


const SliderItem = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={1}>
            <View>
                <Image source={item.image} style={{height: 176, resizeMode:'cover', width: null, flex: 1}}/>
            </View>
        </TouchableOpacity>
    );
};



export class DetailSlider extends Component {
    static defaultProps = {
        activeDotStyle: {backgroundColor: '#4A90E2'},
        dotStyle: {backgroundColor: '#D8D8D8'},
        badgeStyle: {backgroundColor:'#dd0d1e'},
        showNextButton: true,
        showPreviousButton: true,
        badgeTitle:'',
        showPosition:false,
    };

    state = {width, height, activeIndex: 0};
    goToSlide = pageNum => {
        this.setState({ activeIndex: pageNum });
        this.flatList.scrollToOffset({
            offset: this._rtlSafeIndex(pageNum) * this.state.width,
        });
    };

    _onNextPress = () => {
        this.goToSlide(this.state.activeIndex + 1);
        this.props.onSlideChange && this.props.onSlideChange(this.state.activeIndex + 1, this.state.activeIndex);
    };
    _onPrevPress = () => {
        this.goToSlide(this.state.activeIndex - 1);
        this.props.onSlideChange && this.props.onSlideChange(this.state.activeIndex - 1, this.state.activeIndex);
    };

    _renderItem = flatListArgs => {
        const { width } = this.state;
        const { item } = flatListArgs;
        console.log('ITEM',item)
        return (
            <View style={{ width, flex: 1 }}>
                <SliderItem item={item}/>
            </View>
        );
    };


    _renderPagination = () => {

        return (
            <View style={[styles.paginationContainer, this.props.paginationStyle]}>
                <View style={styles.paginationDots}>
                    {this.props.slides.length > 1 &&
                    this.props.slides.map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                this._rtlSafeIndex(i) === this.state.activeIndex
                                    ? this.props.activeDotStyle
                                    : this.props.dotStyle,
                            ]}
                        />
                    ))}
                </View>
            </View>
        );
    };
    _rtlSafeIndex = i => (isAndroidRTL ? this.props.slides.length - 1 - i : i);

    _onMomentumScrollEnd = e => {
        const offset = e.nativeEvent.contentOffset.x;
        const newIndex = this._rtlSafeIndex(Math.round(offset / this.state.width));
        if (newIndex === this.state.activeIndex) {
            return;
        }
        const lastIndex = this.state.activeIndex;
        this.setState({ activeIndex: newIndex });
        this.props.onSlideChange && this.props.onSlideChange(newIndex, lastIndex);
    };

    _onLayout = () => {
        const { width, height } = Dimensions.get('window');
        if (width !== this.state.width || height !== this.state.height) {
            this.setState({ width, height });
            const func = () => {
                this.flatList.scrollToOffset({
                    offset: this._rtlSafeIndex(this.state.activeIndex) * width,
                    animated: false,
                });
            };
            Platform.OS === 'android' ? setTimeout(func, 0) : func();
        }
    };
    _renderNextButton = () => {
        return (
            <View style={styles.rightButtonContainer}>
                <Button transparent onPress={()=>{this._onNextPress()}}>
                    <Image style={styles.image} source={require('../assets/icons/next.png')}/>
                </Button>
            </View>
        )
    }
    _renderPreviousButton = () => {
        return (
            <View style={styles.leftButtonContainer}>
                <Button transparent onPress={()=>{this._onPrevPress()}}>
                    <Image style={styles.image} source={require('../assets/icons/prew.png')}/>
                </Button>
            </View>
        )
    }
    _renderBadge = (title) => {
        const {badgeStyle} = this.props;
        return (
            <View style={[styles.badgeContainer,badgeStyle]}>
                <Text style={{color:'#fff',fontSize:12}}>{title}</Text>
            </View>
        )
    }
    _renderPosition = () => {
        return (
            <View style={styles.locationContainer}>
                <Button transparent>
                    <Image style={styles.image} source={require('../assets/icons/location.png')}/>
                </Button>
            </View>
        )
    }
    render() {
        const {hidePagination, activeDotStyle, dotStyle, renderItem, data,showNextButton,showPreviousButton,badgeTitle,showPosition, ...otherProps} = this.props;
        const isLastSlide = this.state.activeIndex === this.props.slides.length - 1;
        const isFirstSlide = this.state.activeIndex === 0;

        return (
            <View style={styles.flexOne}>
                <FlatList
                    ref={ref => (this.flatList = ref)}
                    data={this.props.slides}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    style={styles.flatList}
                    renderItem={this._renderItem}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    extraData={this.state.width}
                    onLayout={this._onLayout}
                    {...otherProps}
                />
                {!hidePagination && this._renderPagination()}
                {showNextButton && !isLastSlide && this._renderNextButton()}
                {showPreviousButton && !isFirstSlide && this._renderPreviousButton()}
                {badgeTitle && this._renderBadge(badgeTitle)}
                {showPosition && this._renderPosition()}
            </View>
        );
    }



}

const styles = {
    flexOne: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: {
        flex: 1,
        flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 0,
        left: 16,
        right: 16,
    },
    paginationDots: {
        height: 18,
        margin: 10,
        flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeContainer:{
        position: 'absolute',
        top:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        left: 10,
        paddingVertical:2,
        paddingHorizontal:10,
    },
    locationContainer:{
        position: 'absolute',
        bottom: 5,
        justifyContent:'center',
        alignItems:'center',
        left: 0,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginHorizontal: 3,
    },
    leftButtonContainer: {
        position: 'absolute',
        left: -9,
    },
    rightButtonContainer: {
        position: 'absolute',
        right: -9,
    },
    image:{
        height:35,
        resizeMode: 'contain',
    },
};
