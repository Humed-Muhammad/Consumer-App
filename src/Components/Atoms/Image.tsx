import React from 'react'
import styled from '@emotion/native'

const Image = styled.Image(({ height, width, radius }: any) => ({

    width: width || "50%",
    height: height || "90%",
    borderRadius: radius || 10,

}))

export default Image
