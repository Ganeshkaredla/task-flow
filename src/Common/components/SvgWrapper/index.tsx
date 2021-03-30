import React, { Component } from 'react'

interface Props {
   renderComponent: Function
}

class SvgWrapper extends Component<Props> {
   render() {
      const { renderComponent: RenderComponent, ...other } = this.props
      return <RenderComponent {...other} />
   }
}

export default SvgWrapper
