/* eslint-disable eol-last */
//Using babel-inline-svg svgs get transformed to React components
import pin from './pin.svg';
import arrowDown from './arrow-down.svg';
import knoop from './knoop.svg';
import pinterest from './pinterest.svg';
import speechEllipsis from './speech-ellipsis.svg';
import clear from './clear.svg';
import search from './search.svg';
import person from './person.svg';


//FIXME: Fix icon exportation method (props.children.props.d -> cleaner  )
//Parse the react object to only the path d prop

const pin_d = pin().props.children.props.d;
const arrowDown_d = arrowDown().props.children.props.d;
const knoop_d = knoop().props.children.props.d;
const pinterest_d = pinterest().props.children.props.d;
const speechEllipsis_d = speechEllipsis().props.children.props.d;
const clear_d = clear().props.children.props.d;
const search_d = search().props.children.props.d;
const person_d = person().props.children.props.d;



/*
var icons = [];

icons.push(pin);
icons.push(arrowDown);
icons.push(knoop);
icons.push(pinterest);
icons.push(speechEllipsis);
icons.push(clear);

icons.forEach(
    icon => icon = icon().props.children.props.d
)*/


//Export the icons
export default {
  'pin': pin_d,
  'arrow-down': arrowDown_d,
  'knoop': knoop_d,
  'speech-ellipsis': speechEllipsis_d,
  'pinterest': pinterest_d,
  'person': person_d,
  'search': search_d
};
