import React, { Component } from 'react'
import styled from "@emotion/styled"; 

const Test = styled("div")`
  opacity: ${({ show }) => (show ? "100" : "0")};
  margin-top: ${({ show }) => (show ? "0" : "100px")};
  transition: opacity ease-out 0.5s, margin-top cubic-bezier(0, 0, 0.58, 1) 1s;
`

export default class Revealable extends Component {
  render() {
    return (
        <Test/>
    )
  }
}





