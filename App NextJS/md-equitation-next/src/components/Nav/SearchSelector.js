import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'Vêtements', text: 'Vêtements', value: 'Vêtements' },
    { key: 'Selles', text: 'Selles', value: 'Selles' },
    { key: 'Fouets & Cravaches', text: 'Fouets & Cravaches', value: 'Fouets & Cravaches' },
    { key: 'Bombes', text: 'Bombes', value: 'Bombes' },
    { key: 'Brosses', text: 'Brosses', value: 'Brosses' },
    { key: 'Tapis Selles', text: 'Tapis Selles', value: 'Tapis Selles' },
    { key: 'Bottes', text: 'Bottes', value: 'Bottes' },
    { key: 'Fers', text: 'Fers', value: 'Fers' },
    { key: 'Reines', text: 'Reines', value: 'Reines' },
    { key: 'Licoles', text: 'Licoles', value: 'Licoles' },
]

const cssAttributes = {
    minWidth: "200px",
    maxWidth: "200px",
    padding: "13px",
}

const SearchSelector = () => (
    <Dropdown
        options={options}
        placeholder='Toutes nos catégories...'
        button
        fluid={true}
        scrolling
        style={cssAttributes}
    />

)

export default SearchSelector;