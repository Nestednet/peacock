import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from './Box.js';
import Column from './Column.js';
type Props = {|
    children: React.node,

|}

export default class TableElement extends React.Component<Props, State>{
    static propTypes = {
        children: PropTypes.node,
    }

    render (){
        const {
            children
        } = this.props;

        var spanCol = children.length;
        return(

            <Box name = "tr" display="flex" direction="row" paddingY={2} shape={"roundedTop"} justifyContent="between"
            alignItems="center" height={"100%"}>
            {children.map((child, index) =>                <Column span = {spanCol} >
                    <Box height = {"100%"} padding={1} key = {child.toString() + index} alignSelf ="center" alignContent="between">
                        {child}
                    </Box>
                </Column>
            )}
            </Box>
        );
    }
}

/*
            <Box            position = "relative"            display="flex"            direction = "row"            alignContent="center"
            alignItems="center"
            justifyContent="between"
            className = "transactions-table__row"
            >
                {children.map(child =>
                    <Box column={spanCol} padding= {4}>
                        {child}
                    </Box>)
                }
            </Box>


*/