import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import classnames from 'classnames';
import Box from './Box.js';
import Column from './Column.js';
import Text from './Text.js';

type Props = {|
    columns : Array<string>,
    children: React.node,
|}

export default class Table extends React.Component<Props, State>{
    static propTypes = {
        columns: PropTypes.arrayOf(PropTypes.string),
        children: PropTypes.node,
    }


    render(){
        const{columns, children} = this.props;
        
        var columnSize = columns.length;
        var globalClass = classnames(
            styles.booking_requests_transactions,
            styles.guest,
        );
        var table__header = classnames(
            styles.transactions_table__header,
        );
        var table__row = classnames(
            styles.transactions_table__row,
        );
        
        const MAX = 12;
        var spanCol = 12 / columns.length; //TODO: afegir excepcions
        console.log("HEYYYY " + spanCol);
        
        return(
            <Box className = {globalClass} col={12} >
                <Box name = "th" display="flex" direction="row" paddingY={2} color={"darkGray"} shape={"roundedTop"}>
                {columns.map((column, index) => 
                    <Column span = {spanCol}>
                        <Box name = "thr" height = {"100%"} color="white" paddingY={3} key = {column + index}>
                            <Text align="center">{column}</Text>
                        </Box>
                    </Column>
                )}
                </Box>
                <Box name = "tb" paddingY={2} shape={"roundedBottom"} color = "lightGray"> 
                {children.map((child, index) => 
                    <Box name = "tbr"  className = {table__row} key = {table__row + index}> 
                        {child}
                    </Box>
                )}
                </Box>
            </Box>
        );
    }
}

            /*
            <Box className = {globalClass}>
                <Box name = "Table" className = {styles}>
                    <Box  name = "tr" position = "relative" display="flex" direction = "row" color="lightGray" shape="roundedTop" className = {table__header}>
                        {columns.map((column, index) =>
                            <Box name = "th" column={columnSize} padding={4} key = {index}>
                                {column}
                            </Box>
                        )}
                    </Box>
                    

                    
                    {children.map((child, index) => 
                        <Box name = "tr"  className = {table__row} key = {table__row + index}> 
                            {child}
                        </Box>
                    )}
                </Box>
            </Box>*/


/*
<article class="booking_requests-transactions guest" id="transactions--{{$request->id}}">
    <table>
        <tr class="transactions-table--header">
            <th>Starts at</th>
            <th>Concept</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
        </tr>
        @foreach($request->transactions as $transaction)
            <tr class="transactions-table--row">
                <th class="date">{{ $transaction->start_at->format("d-m-Y") }}</th>
                <th class="concept">{{ $transaction->getConcept() }}</th>
                <th class="amount">{{ $transaction->amount }}€</th>
                <th class="status --{{ $transaction->status }}"><div><span>{{ $transaction->status }}</span></div></th>
                <th>TODO</th>
            </tr>
        @endforeach
    </table>
</article>

*/