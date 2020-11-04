import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component {
    constructor(){
        super()
        this.state = {
            sections: [{
                title:'hats',
                imageUrl:'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg',
                id: 1
            },
            {
                title:'jackets',
                imageUrl:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 2
            },
            {
                title:'sneakers',
                imageUrl:'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id:3
            },
            {
                title:"women's",
                imageUrl:'https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id:4,
                size: 'large' 
            },
            {
                title:"men's",
                imageUrl:'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id:5,
                size: 'large'
            }
                    ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;