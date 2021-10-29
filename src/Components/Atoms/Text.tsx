import styled from '@emotion/native'

const Text = styled.Text((props:any)=>`
    padding:3px;
    color: ${props.color};
    font-size: ${props.fontSize};
    fontWeight: ${props.fontWeight?props.fontWeight:"normal"}
`)
    


        
 
export default Text;
