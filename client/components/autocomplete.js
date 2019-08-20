import React, {Component} from 'react'
import {Autocomplete} from '@loadup/react-google-places-autocomplete'

class AutoComplete extends Component {
  render() {
    return (
      <Autocomplete
        fields={['address_components', 'formatted_address', 'place_id']}
        id="example-autocomplete-id"
        onPlaceChanged={({parsed}) => {
          // Do whatever you want
          // original is the Google Maps PlaceResult Object
          // parsed is the parsed version of the address components
        }}
        types={['address']}
      />
    )
  }
}
export default AutoComplete
