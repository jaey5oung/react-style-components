// 경로 : src/components/PhoneItem/PhoneItem.js

import React from "react"
// import "./PhoneItem.css"
import styled from "styled-components"

const PhoneWrappers = styled.div`
  color: #ff2;
`

const PhoneItem = () => {
  return (
    <PhoneWrappers>
      <div className="phone_item">
        <div className="phone_item_left">
          <div className="phone_item_name">장재영</div>
          <div className="phone_item_phone"></div>
        </div>
        <div className="phone_item_right">
          <button>삭제</button>
        </div>
      </div>
    </PhoneWrappers>
  )
}

export default PhoneItem
