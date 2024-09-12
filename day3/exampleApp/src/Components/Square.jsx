// import React from 'react'

// const Square = (props) => {
//     const{num} = props
//   return (
//     <div>Square</div>
//   )
// }

// export default Square

import React from 'react'

const Square = ({num}) => {
  return (
    <div>
        {num * num}
    </div>
  )
}

export default Square