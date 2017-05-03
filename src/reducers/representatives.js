import { GET_REPRESENTATIVES  } from '../actions/index';
import _ from 'lodash';

export default function(state = [], action) {
    switch(action.type)  {      
        case GET_REPRESENTATIVES:
            const { offices, officials } = action.payload.data;
            const populatedOffice = offices.map((office) => { return {
                    office: office.name, 
                    officials: office.officialIndices.map(i => officials[i])
                }
            });
            return populatedOffice;
        default:
            return state;
    }
}