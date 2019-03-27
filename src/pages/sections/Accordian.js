import React, { Component } from 'react'
import '../.././styles/accordian.scss';

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: 'There’s room for two.',
    paragraph: 'Fully stocked cooking area that includes everything but the kitchen sink. Propane stove, pots and pans of various sizes, plates and cutlery for 4 and coffee making supplies, including da beans. Something else you need and not sure if we have? Send us a message, odds are we have it.'
  },
  {
    title: 'The kitchen is fully stocked.',
    paragraph
  },
  {
    title: 'You have the power.',
    paragraph
  },
  {
    title: 'Totally Towable.',
    paragraph
  }
]



export default class Accordian extends Component {
  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        title,
        paragraph
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            </div>
          </div>
      </div>
    )
  }
}