/** Import Externals */
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useRef } from 'react';

/** import Components */
import { Animated, StyleSheet } from 'react-native';

/** Import Internals */
import { measureRef } from '../data/common/utils';

const propTypes = {
    duration: PropTypes.number,
    offset: PropTypes.number,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    visible: PropTypes.bool.isRequired
};

const defaultProps = {
    duration: 3000,
    offset: 0,
};

const SlidingView = props => {
    /** Styles */
    const styles = useMemo( () => createStyleSheet(props), [] );

    /** Ref */
    const slideAnim = useRef(new Animated.Value(500));
    const viewRef = useRef(null);
    const viewDimensionsRef = useRef({width: 0, height:0});

    const measureAndFadeIn = async () => {
        viewDimensionsRef.current = await measureRef(viewRef);
        hide();
    }

    /** Hooks */
    useEffect( () => {
        setViewVisible(props.visible);
    }, [props.visible]);

    /** Actions */
    const setViewVisible = visible => {
        if(visible) {
            display();
        } else {
            hide();
        }
    };

    const display = () => {
        Animated.timing(slideAnim.current, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const hide = () => {
        Animated.timing(slideAnim.current, {
            toValue: parseInt(viewDimensionsRef.current.height - props.offset),
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    /** Renders */
    return (
        <Animated.View
            onLayout={measureAndFadeIn}
            ref={viewRef}
            style={[
                styles.container,
                { transform: [{ translateY: slideAnim.current }] },
                props.style,
            ]}
        >
            {props.children}
        </Animated.View>
    )
};

const createStyleSheet = props => {
    return StyleSheet.create({
        container: {
            width: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
        },
    });
};

SlidingView.propTypes = propTypes;
SlidingView.defaultProps = defaultProps;

export default SlidingView;

